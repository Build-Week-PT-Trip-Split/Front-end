import React from 'react';
import { Link, Route } from 'react-router-dom';
import Logo from '../assets/logo.png';

import {Navbar, NavbarBrand} from 'reactstrap';

export default function NavBar(props) {

    const handleLogout = (event) => {
        event.preventDefault();
        props.setAuth(false);
        localStorage.clear();
      }

    return (
        <div>
            <Navbar>
                <NavbarBrand><img src={Logo} alt='Trip Split Logo' /><span>Trip Split</span></NavbarBrand>
                {/* Shows nav with logout button only when you're logged in */}
                {props.isAuthenticated ? 
                <div className="navbar-links">
                    <Link to='/trips'>My Trips</Link>
                    <Link to='/friends'>My Friends</Link>
                    <Link to='/profile'>My Profile</Link>
                    <a href="" onClick={handleLogout}>Logout</a>
                </div> : <React.Fragment></React.Fragment> }
            </Navbar>
            <Route exact path='/profile' />
            <Route exact path='/friends' />
            <Route exact path='/trips' />
        </div>
    );
};


