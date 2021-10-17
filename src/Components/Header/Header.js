import React from 'react';
import {Navbar, Container, Nav, Button} from "react-bootstrap";
import logo from '../../images/logo2.png';
import { FaCartPlus } from "react-icons/fa";
import './Header.css';
import {Link} from "react-router-dom";
const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className="bg-white">
                <Container>
                    <Navbar.Brand href="#home" as={Link} to="/home"><img
                        alt=""
                        src={logo}
                        width="150"
                        height="130"
                        className="d-inline-block align-top img-fluid"
                    /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">

                        <Nav className="ms-auto">
                            <Nav.Link href="#deets" className="text-dark" as={Link} to="/cart" ><FaCartPlus/></Nav.Link>
                            <Nav.Link className="text-dark" href="#memes" as={Link} to="/login">
                               LogIn
                            </Nav.Link>
                            <Nav.Link as={Link} to="/register" className="singupbtn" href="#memes">
                                Sing Up
                            </Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;