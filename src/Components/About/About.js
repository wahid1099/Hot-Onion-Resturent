import React from 'react';
import {Row, Col, Card, Container} from "react-bootstrap";
import chef1 from '../../images/shef1.png';
import shef2 from '../../images/chef-cook-food-33614.png';
import delivery from '../../images/food-deliveryBoy.png';
import busimg from '../../images/Group 204.png';
import truckimg from '../../images/Group 245.png';
import alarmicon from '../../images/Group 1133.png';
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import './about.css';
const About = () => {
    return (
        <div>
            <Container>
            <Row xs={1} md={3} className="g-4 mt-5">

                    <Col>
                        <Card className="border-0 cardanimation">
                            <Card.Img variant="top" className="img-fluid" src={chef1} />
                            <Card.Body>
                                <Card.Title>
                                    <div className="d-flex">
                                        <img src={busimg}/>
                                       <div>
                                           <h6 className="ms-2 mt-1">FAST DELIVERY</h6>
                                       </div>
                                    </div>
                                </Card.Title>
                                <Card.Text className="ms-5">
                                   <p>
                                       <small className="text-secondary">
                                           Keep your systems in sync with automated web hook based notification each time link is paid and how dream about future.
                                       </small>
                                   </p>
                                    <div>
                                        <p>See more <BsFillArrowRightCircleFill/></p>
                                    </div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                <Col>
                    <Card className="border-0 cardanimation">
                        <Card.Img variant="top" className="img-fluid" src={shef2} />
                        <Card.Body>
                            <Card.Title>
                                <div className="d-flex">
                                    <img src={alarmicon}/>
                                    <div>
                                        <h6 className="ms-2 mt-1">A GOOD AUTO RESPONDER</h6>
                                    </div>
                                </div>
                            </Card.Title>
                            <Card.Text className="ms-5">
                                <p>
                                    <small className="text-secondary">
                                        Keep your systems in sync with automated web hook based notification each time link is paid and how dream about future.
                                    </small>
                                </p>
                                <div>
                                    <p>See more <BsFillArrowRightCircleFill/></p>
                                </div>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="border-0 cardanimation">
                        <Card.Img variant="top" className="img-fluid" src={delivery} />
                        <Card.Body>
                            <Card.Title>
                                <div className="d-flex">
                                    <img src={truckimg}/>
                                    <div>
                                        <h6 className="ms-2 mt-1">HOME DELIVERY</h6>
                                    </div>
                                </div>
                            </Card.Title>
                            <Card.Text className="ms-5">
                                <p>
                                    <small className="text-secondary">
                                        Keep your systems in sync with automated web hook based notification each time link is paid and how dream about future.
                                    </small>
                                </p>
                                <div>
                                    <p>See more <BsFillArrowRightCircleFill/></p>
                                </div>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>
            </Container>
        </div>
    );
};

export default About;