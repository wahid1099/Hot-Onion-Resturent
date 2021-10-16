import React from 'react';
import {Card, Col} from "react-bootstrap";
import '../food.css';
import {Link} from "react-router-dom";
const Lunch = (props) => {
    console.log(props);
    const {id,name,img,price}=props.lunch;
    return (
        <div>

            <Col>
                <Link   to={`/${id}`}>

                <Card className="border-0 fooditemcard">
                    <Card.Img variant="top" src={img} className="img-fluid w-50 mx-auto" />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            <small className="text-secondary">How we dream about our future</small>
                            <h5>${price}</h5>
                        </Card.Text>

                    </Card.Body>
                </Card>
                </Link>
            </Col>


        </div>
    );
};

export default Lunch;