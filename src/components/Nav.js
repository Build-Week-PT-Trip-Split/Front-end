import React from 'react';
import { Link, Route } from 'react-router-dom';
import Logo from '../assets/logo.png';

export default function NavBar(props) {

    const handleLogout = (event) => {
        event.preventDefault();
        props.setAuth(false);
        localStorage.removeItem('token');
      }

    return (
        <div>
            <div className='navBar'>
                <img src={Logo} alt='Trip Split Logo' />
                {/* Shows nav with logout button only when you're logged in */}
                {props.isAuthenticated ? 
                <React.Fragment>
                    <Link to='/trips'>My Trips</Link>
                    <Link to='/friends'>My Friends</Link>
                    <Link to='/profile'>My Profile</Link>
                    <a href="" onClick={handleLogout}>Logout</a>
                </React.Fragment> : <React.Fragment></React.Fragment> }
            </div>
            <Route exact path='/profile' />
            <Route exact path='/friends' />
            <Route exact path='/trips' />
        </div>
    );
};


