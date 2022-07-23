import React from 'react';
import Banner from './Banner';
import Info from './Info';
import MakeAppoinment from './MakeAppoinment';
import Service from './Service';
import Testimonials from './Testimonials';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Service></Service>
            <MakeAppoinment></MakeAppoinment>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;