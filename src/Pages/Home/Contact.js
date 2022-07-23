import React from 'react';
import GetBtn from '../../Shared/GetBtn';
import './Contact.css';

const Contact = () => {
    return (
        <div className='mt-12 contact-section py-6'>
            <div className="w-10/12 md:w-1/2 mx-auto">
                {/* COntact title */}
                <div className='mt-14 mb-8'>
                    <h3 className='font-semibold text-xl text-secondary'>Contact Us</h3>
                    <h1 className='text-3xl text-white'>Stay connected with us</h1>
                </div>

                {/* contact form */}
                <form action="" className='w-full md:w-3/4 mx-auto'>
                    <input type="email" placeholder="Your Email" required className="input input-bordered w-full mb-4" />

                    <input type="text" placeholder="Subject" className="input input-bordered w-full mb-4" />

                    <textarea id="" placeholder="Your Message" rows={60} required className="input input-bordered w-full mb-4" ></textarea>

                    <GetBtn text="Submit"></GetBtn>

                </form>
            </div>
        </div>
    );
};

export default Contact;