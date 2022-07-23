import React from 'react';
import Banner from './Banner';
import Contact from './Contact';
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
            <Contact></Contact>

        </div>
    );
};

export default Home;