import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getCurrentUser } from '../actions/index.js';

const Profile = (props) => {

    const userID = Number(localStorage.getItem("userID"))

    useEffect(() => {
        props.getCurrentUser(userID);
    }, [])

    const { name, username, email, img, trips, friends } = props;

    return (
        <div className='profile_container'>
            <img src={img} alt='Your profile photo' />
            <div className='profile_info'>
                <h1>{name}</h1>
                <h3>Username: {username}</h3>
                <div className='link'>Email: <a href={email}>{email}</a></div>
                <div className='info_more'>
                    <div className='trips'>
                        <h3>Trips</h3>
                        <p>{trips.length}</p>
                    </div>
                    <div className='friends'>
                        <h3>Friends</h3>
                        <p>{friends.length}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        user: state.currentUserReducer.currentUser
    }
}

export default connect(mapStateToProps, { getCurrentUser })(Profile);