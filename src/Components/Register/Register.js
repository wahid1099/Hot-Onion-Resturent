import React from 'react';
import './register.css';
import lgo from '../../images/logo2.png';
import {Button, FloatingLabel, Form} from "react-bootstrap";
import background from '../../images/bannerbackground.png';
import UseAuth from "../../Hooks/UseAuth";

const Register = () => {
     const {
         registerNewUser,
         handleRegistration,
         handleEmailChange,
         handlepassChange,
         error} =UseAuth();
    return (
        <div className="singup">
        <div className="container mx-auto mt-5 pt-4" >

            <img src={lgo} className="img-fluid w-25"/>
            <div>
                <h2 className="text-danger mt-4">Sing Up</h2>
                <Form onSubmit={handleRegistration}>
                    <Form.Group className="mb-3 w-50 mx-auto" controlId="formBasicEmail">
                        <Form.Label className="float-start">Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onBlur={handleEmailChange}/>
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3 w-50 mx-auto" controlId="formBasicPassword">
                        <Form.Label className="float-start">Password</Form.Label>
                        <Form.Control type="password" placeholder="Password"onBlur={handlepassChange} />
                    </Form.Group>

                    <Button variant="danger" type="submit" className="w-50 mx-auto mt-4">
                        Sing Up
                    </Button>

                    <p className="text-danger mt-2">Already Have an Account?</p>
                    {error}
                </Form>
            </div>
        </div>
        </div>
    );
};

export default Register;