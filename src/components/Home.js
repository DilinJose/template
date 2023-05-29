import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { logoutAction } from '../actions';

const Home = () => {
  const dispatch = useDispatch();
  const { loginCredential: auth } = useSelector((state) => state.login);
  const history = useNavigate();
  const handleLogout = () => {
    dispatch(logoutAction());
    history('/login');
  };
  return (
    <>
      <Navbar bg="light" expand="md" className="mb-3">
        <Container fluid>
          <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-md`}
            aria-labelledby={`offcanvasNavbarLabel-expand-md`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                Menus
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                {!auth && (
                  <div>
                    <NavLink className="btn btn-primary m-3" to={'/login'}>
                      Login
                    </NavLink>
                    <NavLink className="btn btn-primary m-3" to={'/signup'}>
                      SignUp
                    </NavLink>
                  </div>
                )}

                {auth && (
                  <div>
                    <NavLink
                      className="btn btn-primary m-3"
                      to={'/changepassword'}
                    >
                      Change password
                    </NavLink>
                    <NavLink
                      className="btn btn-primary m-3"
                      onClick={() => handleLogout()}
                    >
                      Logout
                    </NavLink>

                  </div>
                )}
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default Home;
