import React, {useState} from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import { loginUser } from '../actions/userAction';


const LoginScreen = () => {
    const dispatch = useDispatch();

    const [userLoginData, setUserLoginData] = useState({
        email: '',
        password: ''
    });

    const loginInputHandler = (e) => {
        setUserLoginData({...userLoginData, [e.target.name]: e.target.value});
    }

    const loginUserHandler = async (e) => {
        e.preventDefault();
        dispatch(loginUser(userLoginData));
    }

  return (
    <>
        <Container>
            <ToastContainer />
            <Form method="POST">
                <h1>Login Form</h1>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        name='email'
                        value={userLoginData.email}
                        onChange={loginInputHandler}
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
                        value={userLoginData.password}
                        onChange={loginInputHandler}
                    />
                </Form.Group>

                <Button onClick={loginUserHandler} variant="primary" type="submit" className='mt-5'>
                    Submit
                </Button>
            </Form>
        </Container>
    </>
  )
}

export default LoginScreen;