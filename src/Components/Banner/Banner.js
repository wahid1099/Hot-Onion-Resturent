import React from 'react';
import './banner.css';
import bgimage from '../../images/bannerbackground.png';
import {InputGroup,FormControl,Button} from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
const Banner = () => {
    return (
        <div className="banner">

            <div className="d-flex flex-column justify-content-center pt-5" >
                <h1>Best food waiting for your belly</h1>
                <div >
                    <input className="input-field" placeholder="Search food item" type="text" />
                    <button className="search-btn">Search</button>
                </div>
            </div>

        </div>
    );
};

export default Banner;