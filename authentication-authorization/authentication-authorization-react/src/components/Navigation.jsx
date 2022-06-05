import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <>
      <Navbar expand="sm" style={{ backgroundColor: '#09efff' }}>
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>

          <Nav>
            <Nav.Link as={NavLink} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/private1">
              Private 1
            </Nav.Link>
            <Nav.Link as={NavLink} to="/private2">
              Private 2
            </Nav.Link>
            <Nav.Link as={NavLink} to="/login">
              Login
            </Nav.Link>
            <Nav.Link as={NavLink} to="/registration">
              Register
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
