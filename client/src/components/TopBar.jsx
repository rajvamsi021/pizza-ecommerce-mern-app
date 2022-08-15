import React from 'react';
import {Navbar, Nav, Container, Image, NavDropdown} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import {useNavigate} from 'react-router-dom'
import { logoutUser } from '../actions/userAction';

const TopBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartstate = useSelector(state => state.cartReducer);
  const userState = useSelector(state => state.loginUserReducer);
  const {currentUser} = userState;

  return (
    <>
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand>
            <Image src='images/logo.png' alt='logo' style={{height: '50px'}}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            {currentUser ? (
              <>
                <NavDropdown title={currentUser.name} id="basic-nav-dropdown">
                  {currentUser.isAdmin && <NavDropdown.Item onClick={() => {navigate('/admin')}}>Admin Panel</NavDropdown.Item>}
                  <NavDropdown.Item href="#action/3.1">Order</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => { dispatch(logoutUser()) }}>LogOut</NavDropdown.Item>
                </NavDropdown>
              </>
            ) : (
              <>
                <LinkContainer to='/login'>
                  <Nav.Link>Login</Nav.Link>
                </LinkContainer>

                <LinkContainer to='/register'>
                  <Nav.Link>Register</Nav.Link>
                </LinkContainer>
              </>
            )}

            <LinkContainer to='/cart'>
                <Nav.Link>Cart {cartstate.cartItems.length}</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default TopBar;