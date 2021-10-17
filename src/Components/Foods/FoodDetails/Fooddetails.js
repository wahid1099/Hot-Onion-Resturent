import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import './fooddetails.css';
import {Container, Row, Col, Nav} from "react-bootstrap";
import { FaCartPlus } from "react-icons/fa";
const Fooddetails = () => {
    const {foodid}=useParams();
    const [details,setDetails]=useState({});
  useEffect(()=>{
      fetch('./data.json')
          .then(res=>res.json())
          .then(data=>{
              const d=data.find(fooddata=>fooddata.id==foodid)
              setDetails(d);
          });
  },[foodid])
 const {id,name,img,price}=details;

    return (
        <div>
          <Container>
              <Row className="pt-5">
                  <Col lg={4} className="pt-5 mt-4 text-start">
               <h1 className="">
                   {name}
               </h1>
                      <p className="text-secondary float-start pt-3">Gay one the walk then she .Demesne mention promise
                      you justice arrived way.Amazing foods are or and increasing to in especially inquietude companions acceptance admiration .Outwieight in families distance wandered ye</p>
                      <div className="pt-2 text"><h2>${price}</h2></div>
                      <Nav.Link as={Link}  className="cartbtn" href="#memes">
                       <FaCartPlus/> Add
                      </Nav.Link>
                  </Col>
                  <Col lg={8} className="pt-3 ">
                      <img src={img} className="img-fluid w-50"/>
                  </Col>
              </Row>
          </Container>

        </div>
    );
};

export default Fooddetails;