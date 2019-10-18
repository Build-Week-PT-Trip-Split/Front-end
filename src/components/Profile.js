import React from 'react';
import Mario from '../assets/mario.png'

const Profile = (props) => {

    const users = [{ "id":1, "name":"Mario", "username":"mario1", "password":"pass", "email":"test@gmail.com", "img":{Mario}}]

    const [user, setUser] = React.useState([]);

    React.useEffect(() => {

        setUser(users[0]);

    }, []);

    const { name, username, email, img } = user;

    return (
        <div className='container'>
            <img src={img} alt='Your profile photo' />
            <h1>{name}</h1>
            <h3>Username: {username}</h3>
            <div>Email: <a href={email}>{email}</a></div>
        </div>
    );
};

export default Profile;