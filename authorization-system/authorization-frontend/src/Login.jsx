import React, { useContext, useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';
import { useLocation } from 'react-router-dom';

const schema = yup
  .object({
    email: yup
      .string()
      .email('Field should contain a valid e-mail')
      .max(255)
      .required('E-mail is required'),
    password: yup.string().required('Password is required'),
  })
  .required();

const Login = () => {
  const location = useLocation();
  const { saveUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    const { password, email } = data;

    try {
      const res = await axios.post('http://localhost:1337/api/auth/local/', {
        identifier: email,
        password,
      });
      saveUser(res.data);
      navigate(location?.state?.from || '/private1');
    } catch (err) {
      console.log(err);
      console.log(err.response);
    }
  };

  return (
    <Container>
      <h1 className="text-center mt-4 mb-4">Login</h1>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="email">Email address</Form.Label>
          <Form.Control
            type="email"
            id="email"
            placeholder="Enter email"
            {...register('email')}
            isInvalid={errors.email}
          />
          <Form.Control.Feedback type="invalid">
            {errors?.email?.message}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="password">Password</Form.Label>
          <Form.Control
            type="password"
            id="password"
            placeholder="Password"
            {...register('password')}
            isInvalid={errors.password}
          />
          <Form.Control.Feedback type="invalid">
            {errors?.password?.message}
          </Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
