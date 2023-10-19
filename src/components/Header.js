import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <React.Fragment>
        <h1>Memory Lane</h1>  <Link to='/'>Home</Link> <Link to = '/sign-in'>Sign In</Link>
        <h2><em>Follow your dreams!</em></h2>
        
        </React.Fragment>
    );
}

export default Header;