import React from 'react';
import clock from '../../assets/icons/clock.svg'
import landmark from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'
const Info = () => {
    return (
        <div>
            <div className="flex flex-col md:flex-row justify-between w-10/12 mx-auto mt-14 gap-9">

                <div className='bg-gradient-to-r from-secondary to-primary w-full md:basis-1/3 py-8 px-4 rounded-lg flex gap-3 items-center'>
                    <div><img src={clock} alt="" /></div>
                    <div className='text-white text-left'>
                        <h3 className='text-xl font-bold'>Opening Hours</h3>
                        <p className='font-thin'>Lorem Ipsum is simply dummy text of the pri</p>
                    </div>
                </div>

                <div className='bg-accent py-8 px-4 rounded-lg w-full md:basis-1/3 flex gap-3 items-center'>
                    <div><img src={landmark} alt="" /></div>
                    <div className='text-white text-left'>
                        <h3 className='text-xl font-bold'>Visit Our Location</h3>
                        <p className='font-thin'>Brooklyn, NY 10036, United States</p>
                    </div>
                </div>

                <div className='bg-gradient-to-r from-secondary to-primary w-full md:basis-1/3 py-8 px-4 rounded-lg flex gap-3 items-center'>
                    <div><img src={phone} alt="" /></div>
                    <div className='text-white text-left'>
                        <h3 className='text-xl font-bold'>Contact us now</h3>
                        <p className='font-thin'>+000 123 456789</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Info;