import React from 'react';
import {Container,Row,Col,Nav} from "react-bootstrap";
import logo from '../../images/logo.png'
const Footer = () => {
    return (
        <div className="Footer bg-dark mt-5 text-white">
            <Container className="mt-4 p-5">
                <Row>
                    <Col lg={6} md={6} sm={12} className="">
                       <img src={logo}
                       className="img-fluid float-start"
                       width="150px"/>
                    </Col>
<Col lg={3} md={3} sm={12}>
    <Nav  className="flex-column text-white">
        <Nav.Link className="text-white" href="/home">About Online Food</Nav.Link>
        <Nav.Link className="text-white" eventKey="link-1">Read our Blog</Nav.Link>
        <Nav.Link className="text-white" eventKey="link-2">Sing up to Deliver</Nav.Link>
        <Nav.Link className="text-white" eventKey="link-2">Add your resturant</Nav.Link>

    </Nav>
</Col>
                    <Col lg={3} md={3} sm={12}>
                        <Nav  className="flex-column text-white">
                            <Nav.Link className="text-white" href="/home">Get help</Nav.Link>
                            <Nav.Link className="text-white" eventKey="link-1">Read FAQs</Nav.Link>
                            <Nav.Link className="text-white" eventKey="link-2">View all cities</Nav.Link>
                            <Nav.Link className="text-white" eventKey="link-2">Resturent near me</Nav.Link>

                        </Nav>
                    </Col>
                </Row>

                <Row className="pt-4">
                    <Col lg={6} md={6} sm={8}>
                        <p className="text-secondary float-start">Copyright &copy; 2021 ONLINE FOOD</p>

                    </Col>
                    <Col lg={6} md={6} sm={12} >
                        <Nav defaultActiveKey="/home" as="ul" className="justify-content-end me-5" >
                            <Nav.Item  as="li">
                                <Nav.Link href="/home" className="text-white">Privacy policy</Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Nav.Link eventKey="link-1" className="text-white">Term of use</Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Nav.Link eventKey="link-2" className="text-white">Price</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>

                </Row>
            </Container>

        </div>
    );
};

export default Footer;