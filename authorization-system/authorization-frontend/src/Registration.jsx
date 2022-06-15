import React, { useContext, useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';

const schema = yup
  .object({
    username: yup.string().required('Username Is Required'),
    email: yup
      .string()
      .email('Field should contain a valid e-mail')
      .max(255)
      .required('E-mail is required'),
    password: yup.string().required('Password is required'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password'), null], 'Passwords must match'),
  })
  .required();

const Registration = () => {
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
    const { username, password, email } = data;

    try {
      const res = await axios.post(
        'http://localhost:1337/api/auth/local/register',
        {
          username,
          email,
          password,
        }
      );

      console.log(res.data);

      saveUser(res.data);

      navigate('/private1');
    } catch (err) {
      console.log(err);
      console.log(err.response);
    }
  };

  return (
    <Container>
      <h1 className="text-center mt-4 mb-4">Registration</h1>

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
          <Form.Label htmlFor="username">Username</Form.Label>
          <Form.Control
            type="text"
            id="username"
            placeholder="Enter Username"
            {...register('username')}
            isInvalid={errors.username}
          />

          <Form.Control.Feedback type="invalid">
            {errors?.username?.message}
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

        <Form.Group className="mb-3">
          <Form.Label htmlFor="confirmPassword">Password</Form.Label>
          <Form.Control
            type="password"
            id="confirmPassword"
            placeholder="Confirm Password"
            {...register('confirmPassword')}
            isInvalid={errors.confirmPassword}
          />
          <Form.Control.Feedback type="invalid">
            {errors?.confirmPassword?.message}
          </Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
    </Container>
  );
};

export default Registration;
