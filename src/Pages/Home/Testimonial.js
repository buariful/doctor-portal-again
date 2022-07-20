import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const Testimonial = () => {
    return (
        <div className='my-20'>
            <div className="w-10/12 flex justify-between mx-auto items-center">

                {/* testimonial title */}
                <div className="text-left testimonial-title">
                    <h3 className="text-secondary font-semibold text-xl">Testimonials</h3>
                    <h1 className="text-accent font-semibold text-4xl">What Our Patiens Says</h1>
                </div>
                <div>
                    <FaQuoteLeft className='text-secondary lg:text-[192px] text-[98px] opacity-30'></FaQuoteLeft>
                </div>
            </div>


        </div>
    );
};

export default Testimonial;