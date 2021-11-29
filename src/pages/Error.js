import React from 'react';
import '../index.css';
const Error = () => {
    return (
        <div className="error">
            <h1>Oops!</h1>
            <h3>404-Page Not Found</h3>
            <img src={require('../assets/404.jpg').default}/>
            <p>The page you are looking for no longer exists.Perhaps you can return back to the site's <span>homepage</span> and see if you can find what you are looking for.</p>
        </div>
    );
};

export default Error;