import React, { useContext } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const schema = yup
  .object({
    username: yup
      .string()
      .required('Username is required')
      .min(6, 'Username must have 6 character in length'),
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

      saveAuthInfo(res.data);
      navigate('/private1');
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
              <Form.Label htmlFor="username">Username </Form.Label>
              <Form.Control
                type="text"
                id="username"
                placeholder="Enter Your Username"
                {...register('username')}
                isInvalid={errors.username}
              />
              <Form.Control.Feedback type="invalid" className="d-block">
                {errors?.username?.message}
              </Form.Control.Feedback>
            </Form.Group>

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

            <Form.Group className="mb-3">
              <Form.Label htmlFor="confirmPassword">
                Confirm Password
              </Form.Label>
              <Form.Control
                type="password"
                id="confirmPassword"
                placeholder="Enter Your Password"
                {...register('confirmPassword')}
                isInvalid={errors.confirmPassword}
              />
              <Form.Control.Feedback type="invalid" className="d-block">
                {errors?.confirmPassword?.message}
              </Form.Control.Feedback>
            </Form.Group>

            <Button variant="primary" type="submit" disabled={isSubmitting}>
              Register
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Registration;
