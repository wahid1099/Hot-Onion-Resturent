import React from 'react';
import {useParams} from "react-router-dom";

const Fooddetails = () => {
    const {foodid}=useParams();
    return (
        <div>
           <h5>{foodid}</h5>
        </div>
    );
};

export default Fooddetails;