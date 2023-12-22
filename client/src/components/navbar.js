import { useState, useEffect, useContext } from 'react'
import { useHistory } from "react-router";
import { CurrentUser } from '../contexts/CurrentUser';
import { Navbar, Nav, Container } from 'react-bootstrap';
function Navi({ children }) {
  const history = useHistory();
  const { currentUser } = useContext(CurrentUser);

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/">Fitness App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">  
            <Nav.Link href="new-fitness">Add Fitness</Nav.Link>
            </Nav>
            <Nav className="ms-auto">
              {currentUser ? (
                <>
                  <Nav.Link href="#" disabled>
                    Logged in as {currentUser.firstName} {currentUser.lastName}
                  </Nav.Link>
                  <Nav.Link href="#" onClick={() => history.push("/profile")}>
                    Profile
                  </Nav.Link>
                  <Nav.Link href="#" onClick={() => history.push("/logout")}>
                    Logout
                  </Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link href="#sign-up" onClick={() => history.push("/sign-up")}>
                    Sign Up
                  </Nav.Link>
                  <Nav.Link href="#login" onClick={() => history.push("/login")}>
                    Login
                  </Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="mt-3">{children}</Container>
    </>
  );
}

export default Navi;
