import { useContext } from 'react';
import { useHistory } from 'react-router';
import { CurrentUser } from '../contexts/CurrentUser'; 

import { Navbar, Nav, Container } from 'react-bootstrap';

function Navi({ children }) {
  const history = useHistory();
  const { currentUser, setCurrentUser } = useContext(CurrentUser); 

  const handleLogout = async () => {
    try {
      await fetch(`${process.env.REACT_APP_SERVER_URL}/logout`, {
        method: 'POST',
        credentials: 'include',
      });

      setCurrentUser(null);

      history.push('/');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href={currentUser ? '/profile' : '/'}>Fitness App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {currentUser && (
                <Nav.Link href="/new-fitness">Add Fitness</Nav.Link>
              )}
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
                  <Nav.Link href="#" onClick={handleLogout}>
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
