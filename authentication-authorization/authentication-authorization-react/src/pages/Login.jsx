import React, { useContext } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import { useLocation, useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();
  const { saveAuthInfo } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    const { email, password } = data;

    try {
      const res = await axios.post('http://localhost:1337/api/auth/local', {
        identifier: email,
        password,
      });
      console.log(res.data);
      saveAuthInfo(res.data);

      console.log(location);
      navigate(location?.state?.from || '/private1');
    } catch (err) {
      console.log(err);
      console.log(err.response);
    }
  };

  return (
    <Container>
      <Row>
        <Col sm={{ span: 4, offset: 4 }}>
          <Form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="email">Email </Form.Label>
              <Form.Control
                type="email"
                id="email"
                placeholder="Enter Your Email"
                {...register('email')}
                isInvalid={errors.email}
              />
              <Form.Control.Feedback type="invalid" className="d-block">
                {errors?.email?.message}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label htmlFor="password">Password</Form.Label>
              <Form.Control
                type="password"
                id="password"
                placeholder="Enter Your Password"
                {...register('password')}
                isInvalid={errors.password}
              />
              <Form.Control.Feedback type="invalid" className="d-block">
                {errors?.password?.message}
              </Form.Control.Feedback>
            </Form.Group>

            <Button variant="primary" type="submit" disabled={isSubmitting}>
              Login
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
