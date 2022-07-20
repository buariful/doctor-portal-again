import React from 'react';
import GetBtn from '../../Shared/GetBtn';
import './makeAppoinment.css';

const MakeAppoinment = () => {
    return (
        <div>
            <div className='makeAppoinment mt-20 mb-10 py-24 relative'>
                <div className="text-left flex gap-14 md:w-10/12 mx-auto flex-col md:flex-row  ">
                    <div className='w-2/5 '>
                        <img src='https://i.ibb.co/zHztcy0/doctor.png' alt="banner chair" className='md:w-10/12 ml-auto rounded-lg absolute w-full doctor-img hidden lg:block' />

                    </div>
                    <div className='md:w-3/5 text-white'>
                        <h3 className='text-xl font-semibold text-secondary'>Appointment</h3>
                        <h1 className="mb-5 text-4xl font-semibold my-5">Make an appointment Today</h1>
                        <p className="my-6 font-normal">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>

                        <GetBtn text="Get Started"></GetBtn>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MakeAppoinment;