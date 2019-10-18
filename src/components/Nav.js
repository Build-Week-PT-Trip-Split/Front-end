import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';

export default function NavBar () {
    return (
        <div className='navBar'>
            <Link to='/profile'>My Profile</Link>
            <Link to='/friends'>My Friends</Link>
            <Link to='/trips'>My Trips</Link>
            <Link to='/login'>Logout</Link>
            <img src={Logo} alt='Trip Split Logo' />
        </div>
    );
};