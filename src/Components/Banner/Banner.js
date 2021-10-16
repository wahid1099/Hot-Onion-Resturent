import React from 'react';
import './banner.css';
import bgimage from '../../images/bannerbackground.png';
import {InputGroup,FormControl,Button} from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
const Banner = () => {
    return (
        <div className="banner">

            <div className="seacrbox input-container">


                    <input className="input-field" type="text" placeholder="Search Food" />
                    <BsSearch id="icon"/>

            </div>
        </div>
    );
};

export default Banner;