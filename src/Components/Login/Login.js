import React from 'react';
import lgo from "../../images/logo2.png";
import {Button, Form} from "react-bootstrap";
import './login.css';

const Login = () => {
    return (
        <div className="login">
            <div className="container mx-auto mt-5 pt-4" >

                <img src={lgo} className="img-fluid w-25"/>
                <div>
                    <h2 className="text-danger mt-4">LogIn To Your Account</h2>
                    <Form>
                        <Form.Group className="mb-3 w-50 mx-auto" controlId="formBasicEmail">
                            <Form.Label className="float-start">Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3 w-50 mx-auto" controlId="formBasicPassword">
                            <Form.Label className="float-start">Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>

                        <Button variant="danger" type="submit" className="w-50 mx-auto mt-4">
                            Log In
                        </Button>

                        <p className="text-danger mt-2">Don't Have an Account?</p>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Login;