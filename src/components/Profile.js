import React from 'react';

const Profile = (props) => {

    const [user, setUser] = React.useState({"id":1,"name":"Mario","username":"mario1","password":"pass","email":"test@gmail.com"});

    // React.useEffect(() => {

    //     setUser();

    // }, []);

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