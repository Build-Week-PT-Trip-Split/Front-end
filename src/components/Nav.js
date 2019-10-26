import React from 'react';
import { NavLink, Link, Route } from 'react-router-dom';
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
                <NavbarBrand>
                    <Link to="/">
                        <img src={Logo} alt='Trip Split Logo' />
                    </Link>
                    <span>Trip Split</span>
                </NavbarBrand>
                {/* Shows nav with logout button only when you're logged in */}
                {props.isAuthenticated ? 
                <div className="navbar-links">
                    <NavLink to='/trips' activeClassName="activeNavButton">My Trips</NavLink>
                    <NavLink to='/friends' activeClassName="activeNavButton">My Friends</NavLink>
                    <NavLink to='/profile' activeClassName="activeNavButton">My Profile</NavLink>
                    <a href="" onClick={handleLogout}>Logout</a>
                </div> : <React.Fragment></React.Fragment> }
            </Navbar>
            <Route exact path='/profile' />
            <Route exact path='/friends' />
            <Route exact path='/trips' />
        </div>
    );
};


