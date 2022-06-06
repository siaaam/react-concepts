import React, { useContext } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Navigation = () => {
  const { user, removeAuthInfo } = useContext(AuthContext);
  return (
    <>
      <Navbar expand="sm" style={{ backgroundColor: '#09efff' }}>
        <Container>
          <Navbar.Brand as={NavLink} to="/">
            React-Bootstrap
          </Navbar.Brand>

          <Nav>
            <Nav.Link as={NavLink} to="/">
              Home
            </Nav.Link>
            {user ? (
              <>
                <Nav.Link as={NavLink} to="/private1">
                  Private 1
                </Nav.Link>
                <Nav.Link as={NavLink} to="/private2">
                  Private 2
                </Nav.Link>
                <Nav.Link onClick={removeAuthInfo}>Logout</Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link as={NavLink} to="/login">
                  Login
                </Nav.Link>
                <Nav.Link as={NavLink} to="/registration">
                  Register
                </Nav.Link>
              </>
            )}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
