import React from 'react';

const Testimonial = () => {
    return (
        <div>
            <div className="shadow-lg p-5 rounded-md">
                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur deleniti quae asperiores quaerat, illo distinctio dolor labore eos, totam id aut, sequi laborum modi odio minus repellat saepe odit facere.</div>

                <div className='flex items-center mt-3 gap-5'>
                    <img src="https://i.ibb.co/9wVVbng/people1.png" alt="people1" />
                    <div>
                        <h3 className='text-xl font-semibold'>People Name</h3>
                        <p>People address</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;