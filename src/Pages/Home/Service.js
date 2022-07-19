import React from 'react';
import flouride from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
import whitening from '../../assets/images/whitening.png'
import GetBtn from '../../Shared/GetBtn';
import treatment from '../../assets/images/treatment.png'

const Service = () => {
    return (
        <div>

            {/* service title */}
            <div className='mt-14 mb-8'>
                <h3 className='font-semibold text-xl text-secondary'>Our Services</h3>
                <h1 className='text-3xl text-accent'>Services We Provide</h1>
            </div>

            {/* services */}
            <div className='my-10 flex md:flex-row flex-col items-center w-10/12 mx-auto gap-5'>

                <div className="shadow-md p-5 basis-1/3 rounded-lg">
                    <img src={flouride} alt="flouride_img" className='mx-auto' />
                    <h3 className='font-semibold text-xl my-4'>Flouride treatment</h3>
                    <p>Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the</p>
                </div>

                <div className="shadow-md p-5 basis-1/3 rounded-lg">
                    <img src={cavity} alt="flouride_img" className='mx-auto' />
                    <h3 className='font-semibold text-xl my-4'>Cavity Filling</h3>
                    <p>Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the</p>
                </div>

                <div className="shadow-md p-5 basis-1/3 rounded-lg">
                    <img src={whitening} alt="flouride_img" className='mx-auto' />
                    <h3 className='font-semibold text-xl my-4'>Whitening</h3>
                    <p>Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the</p>
                </div>
            </div>

            {/* exceptional dental care */}
            <div className="hero-content text-left flex gap-14 md:w-10/12 mx-auto flex-col md:flex-row mt-14 mb-10">
                <div className='w-2/5'>
                    <img src={treatment} alt="banner chair" className='md:w-10/12 ml-auto rounded-lg' />
                </div>
                <div className='md:w-3/5'>
                    <h1 className="mb-5 text-5xl font-bold text-accent ">Exceptional Dental Care, on Your Terms</h1>
                    <p className="my-6 text-accent">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>

                    <GetBtn text="Get Started"></GetBtn>
                </div>
            </div>
        </div>
    );
};

export default Service;