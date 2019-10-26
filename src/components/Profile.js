import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getCurrentUser } from '../actions/index.js';
import placeholder from '../assets/no-picture-available-icon-1.jpg';

const Profile = (props) => {
    const userID = Number(localStorage.getItem("userID"))
    
    useEffect(() => {
        props.getCurrentUser(userID);
    }, [])

    // const { name, username, email, img, trips, friends } = props;

    return (
        <div className='profile_container'>
            {(props.user.img) ? <img src={props.user.img} alt="" /> : <img src={placeholder} alt="Your profile photo" />}
            <div className='profile_info'>
                <h1>{props.user.name}</h1>
                <h3>Username: {props.user.username}</h3>
                <div className='link'>Email: <a href={props.user.email}>{props.user.email}</a></div>
                <div className='info_more'>
                    <div className='trips'>
                        <h3>Trips</h3>
                        <p>{(props.trips.length !== 0) ? <p>{props.trips.length}</p> : "You haven't taken any trips yet!" }</p>
                    </div>
                    <div className='friends'>
                        {/* <h3>Friends</h3>
                        <p>{friends.length}</p> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        user: state.currentUserReducer.currentUser,
        trips: state.tripReducer.trips
    }
}

export default connect(mapStateToProps, { getCurrentUser })(Profile);