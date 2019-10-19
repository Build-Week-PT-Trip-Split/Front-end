import React from 'react';
import { Link, Route } from 'react-router-dom';
import Logo from '../assets/logo.png';

export default function NavBar() {

    const handleLogout = () => {
        localStorage.removeItem('token');
      }

    return (
        <div>
            <div>
                <Route exact path='/profile' />
                <Route exact path='/friends' />
                <Route exact path='/trips' />
            </div>
            <div className='navBar'>
                <img src={Logo} alt='Trip Split Logo' />
                <Link to='/trips'>My Trips</Link>
                <Link to='/friends'>My Friends</Link>
                <Link to='/profile'>My Profile</Link>
                <a href="" onClick={handleLogout}>Logout</a>
            </div>
        </div>
    );
};