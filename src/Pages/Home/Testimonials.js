import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import Testimonial from './Testimonial';


const Testimonials = () => {
    return (
        <div className='my-20'>
            {/* testimonial title */}
            <div className="w-10/12 flex justify-between mx-auto items-center">
                <div className="text-left testimonial-title">
                    <h3 className="text-secondary font-semibold text-xl">Testimonials</h3>
                    <h1 className="text-accent font-semibold text-4xl">What Our Patiens Says</h1>
                </div>
                <div>
                    <FaQuoteLeft className='text-secondary lg:text-[192px] text-[98px] opacity-30'></FaQuoteLeft>
                </div>
            </div>

            {/* testimonial body */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-7 text-accent text-left w-10/12 mx-auto">
                <Testimonial></Testimonial>
                <Testimonial></Testimonial>
                <Testimonial></Testimonial>
            </div>
        </div>
    );
};

export default Testimonials;