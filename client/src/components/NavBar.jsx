import React from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import {MdLocalOffer} from 'react-icons/md';


const NavBar = () => {
  return (
    <>
        <Navbar bg='dark' variant='dark' expand='lg'>
            <Container fluid>
                <h6 className='text-light'>
                    <MdLocalOffer className='text-warning'/> &nbsp; &nbsp;
                    Free Delivery on Order above ₹500/-
                </h6>
                <Nav className='mt-auto'>
                    <LinkContainer to='/'>
                        <Nav.Link>Home</Nav.Link>
                    </LinkContainer>

                    <LinkContainer to='/about'>
                        <Nav.Link>About Us</Nav.Link>
                    </LinkContainer>

                    <LinkContainer to='/contact'>
                        <Nav.Link>Contact Us</Nav.Link>
                    </LinkContainer>

                    <LinkContainer to='/policy'>
                        <Nav.Link>Terms and Policy</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Container>
        </Navbar>
    </>
  )
}

export default NavBar;