import React, {useEffect, useState} from 'react';
import {Tabs, Tab, Container,Row} from "react-bootstrap";
import './food.css';
import Breakfast from "./Breakfast/Breakfast";
import Lunch from "./Lunch/Lunch";
import Dinner from "./Dinner/Dinner";
const Foodmenu = () => {
    const [food,setFood]=useState([]);
    useEffect(()=>{
        fetch('./data.json')
            .then(res=>res.json())
            .then(data=>setFood(data));
    },[])
    console.log(food);
    return (
        <div>

            <Container className="mt-5">
                <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3 tabstitle">
                    <Tab eventKey="home" title="Breakfast">
                        <Row xs={1} md={3} className="g-4">
                        {
                            food.slice(0,6).map(breakast=><Breakfast
                                key={breakast.id}
                                breakfastitem={breakast}

                                ></Breakfast>

                            )

                        }
                        </Row>
                    </Tab>
                    <Tab eventKey="profile" title="Lunch">
                        <Row xs={1} md={3} className="g-4">
                        {
                            food.slice(6,12).map(lunch=><Lunch
                                    key={lunch.id}
                                    lunch={lunch}

                                ></Lunch>

                            )

                        }
                        </Row>
                    </Tab>
                    <Tab eventKey="contact" title="Dinner" >
                        <Row xs={1} md={3} className="g-4">
                        {
                            food.slice(12,18).map(dinner=><Dinner
                                    key={dinner.id}
                                    dinner={dinner}

                                ></Dinner>

                            )

                        }
                        </Row>
                    </Tab>
                </Tabs>
            </Container>
        </div>
    );
};

export default Foodmenu;