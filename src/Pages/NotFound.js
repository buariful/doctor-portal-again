import React from 'react';
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div>
            <h1>It is from Not found page</h1>
            <Link to='/home'>Home</Link>
        </div>
    );
};

export default NotFound;