import React from 'react';
import GetBtn from '../../Shared/GetBtn';
import './Banner.css'

const Banner = () => {
    return (
        <div>
            <div className="hero banner bannerBg md:min-h-screen">
                <div className="hero-content text-left flex gap-14 md:w-10/12 mx-auto flex-col-reverse md:flex-row">
                    <div className='md:w-3/5'>
                        <h1 className="mb-5 text-5xl font-bold text-accent ">Your New Smile Starts Here</h1>
                        <p className="mb-5 text-accent">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>

                        <GetBtn text="Get Started"></GetBtn>
                    </div>
                    <img src='https://i.ibb.co/bKpR6Jp/chair.png' alt="banner chair" className='md:w-2/5' />
                </div>
            </div>
        </div>
    );
};

export default Banner;