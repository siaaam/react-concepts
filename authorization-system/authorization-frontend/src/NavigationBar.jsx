import React, { useContext } from 'react';

import { Navbar, Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';

const NavigationBar = () => {
  const { user, removeUser } = useContext(AuthContext);
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand to="/">Practice</Navbar.Brand>
        <Nav>
          <Nav.Link as={NavLink} to="/">
            Home
          </Nav.Link>
          {user ? (
            <>
              <Nav.Link as={NavLink} to="/private1">
                Private1
              </Nav.Link>
              <Nav.Link as={NavLink} to="/private2">
                Private2
              </Nav.Link>
              <Nav.Link as={NavLink} to="/private3">
                Private3
              </Nav.Link>
              <Nav.Link onClick={removeUser}>Log Out</Nav.Link>
            </>
          ) : (
            <>
              <Nav.Link as={NavLink} to="/login">
                Login
              </Nav.Link>
              <Nav.Link as={NavLink} to="/registration">
                Registration
              </Nav.Link>
            </>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
