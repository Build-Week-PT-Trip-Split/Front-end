import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {getCurrentUser} from '../actions/index.js';

const Profile = (props) => {

    const userID = Number(localStorage.getItem("userID"))

    useEffect(() => {
        props.getCurrentUser(userID);
    }, [])

    const { name, username, email, img } = props.user;

    return (
        <div className='container'>
            <img src={img} alt='Your profile photo' />
            <h1>{name}</h1>
            <h3>Username: {username}</h3>
            <div>Email: <a href={email}>{email}</a></div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        user: state.currentUserReducer.currentUser
    }
}

export default connect(mapStateToProps, {getCurrentUser})(Profile);