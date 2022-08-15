import React, {useEffect} from 'react';
import {Container, Row, Col, Nav} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useNavigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {ToastContainer} from 'react-toastify';
import {FaPizzaSlice, FaUsers} from 'react-icons/fa';
import {GiFullPizza} from 'react-icons/gi';

const AdminScreen = () => {
    const navigate = useNavigate();
    const userState = useSelector(state => state.loginUserReducer);
    const {currentUser} = userState;

    useEffect(() => {
        if(localStorage.getItem('currentUser') === null || !currentUser.isAdmin) {
            navigate('/');
        }
    }, [])

  return (
    <>
        <ToastContainer />
        <Container>
            <Row>
                <h1 className='text-center bg-dark text-light p-2 mb-5'>Admin Panel</h1>
                <Col md={2}>
                    <Row>
                        <LinkContainer to='/admin' className='ms-3'>
                            <Nav.Link><FaUsers className='me-2'/> All Users</Nav.Link>
                        </LinkContainer>
                    </Row>
                    <hr />
                    <Row>
                        <LinkContainer to='/admin/pizzalist' className='ms-3'>
                            <Nav.Link><FaPizzaSlice className='me-2'/> All Pizzas</Nav.Link>
                        </LinkContainer>
                    </Row>
                    <hr />
                    <Row>
                        <LinkContainer to='/admin/addnewpizza' className='ms-3'>
                            <Nav.Link><GiFullPizza className='me-2'/> Add New Pizza</Nav.Link>
                        </LinkContainer>
                    </Row>
                </Col>
                <Col md={10}>
                    <Outlet />
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default AdminScreen;