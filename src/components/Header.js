import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <React.Fragment>
        <h1>Memory Lane</h1>  <Link to='/'><h2>Home</h2></Link> <Link to = '/sign-in'><h2>Sign In</h2></Link>
        <h2><em>Follow your dreams!</em></h2>
        
        </React.Fragment>
    );
}

export default Header;