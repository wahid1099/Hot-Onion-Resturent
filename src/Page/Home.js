import React from 'react';
import Header from "../Components/Header/Header";
import Banner from "../Components/Banner/Banner";
import Footer from "../Components/Footer/Footer";
import About from "../Components/About/About";
import Foodmenu from "../Components/Foods/Foodmenu";
import Register from "../Components/Register/Register";

const Home = () => {
    return (
        <div>

           <Banner></Banner>

            <Foodmenu></Foodmenu>
            <About></About>
           <Footer></Footer>
        </div>
    );
};

export default Home;