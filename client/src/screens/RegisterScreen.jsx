import React, {useState} from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useDispatch} from 'react-redux';
import { registerUser } from '../actions/userAction';


const RegisterScreen = () => {
    const dispatch = useDispatch();

    const [userRegistrationData, setUserRegistrationData] = useState({
        name: '',
        email: '',
        password: '',
        cpassword: ''
    });

    const registrationInputHandler = (e) => {
        setUserRegistrationData({...userRegistrationData, [e.target.name]: e.target.value});
    }

    const registerUserHandler = async (e) => {
        e.preventDefault();
        dispatch(registerUser(userRegistrationData));
    }

  return (
    <>
        <Container>
            <ToastContainer />
            <Form method="POST">
                <h1>Registration Form</h1>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter name"
                        name='name'
                        value={userRegistrationData.name}
                        onChange={registrationInputHandler}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        name='email'
                        value={userRegistrationData.email}
                        onChange={registrationInputHandler}
                    />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        name='password'
                        value={userRegistrationData.password}
                        onChange={registrationInputHandler}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Confirm Password"
                        name='cpassword'
                        value={userRegistrationData.cpassword}
                        onChange={registrationInputHandler}
                    />
                </Form.Group>

                <Button onClick={registerUserHandler} variant="primary" type="submit" className='mt-5'>
                    Submit
                </Button>
            </Form>
        </Container>
    </>
  )
}

export default RegisterScreen;