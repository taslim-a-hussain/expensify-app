import React from 'react';
import {Link} from 'react-router-dom';

const NotFound = () => (
    <div>
        <h1>Not found page</h1>
        <h2>404! <Link to="/">Home</Link></h2>
    </div>
);

export default NotFound;