import React from 'react';
import { Link, Route } from 'react-router-dom';
import Logo from '../assets/logo.png';

export default function NavBar() {
    return (
        <div>
            <div>
                <Route exact path='/profile' />
                <Route exact path='/friends' />
                <Route exact path='/trips' />
                <Route exact path='/login' />
            </div>
            <div className='navBar'>
                <Link to='/profile'>My Profile</Link>
                <Link to='/friends'>My Friends</Link>
                <Link to='/trips'>My Trips</Link>
                <Link to='/login'>Logout</Link>
                <img src={Logo} alt='Trip Split Logo' />
            </div>
        </div>
    );
};