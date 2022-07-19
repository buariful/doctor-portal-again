import React from 'react';

const GetBtn = (props) => {
    return (
        <div>
            <button className="btn bg-gradient-to-r from-secondary to-primary border-none text-white">{props.text}</button>

        </div>
    );
};

export default GetBtn;