import React, {useEffect} from "react";
import {connect} from 'react-redux';
import {getUsers} from '../../actions/index.js';
import FriendCard from './FriendCard';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';


const FriendList = (props) => {

  const routeToAddFriend = e => {
    e.preventDefault();
    props.history.push('/friends/addfriend')
  }

    useEffect( () => {
      props.getUsers();
    }, []);

    return (
        <div>
          <h1>Friends</h1>
          <Button color="primary" onClick={routeToAddFriend} >Add New Friend</Button>

          <div className="CardComponentStyle">
            {props.users.map( (user) => {
              return  <FriendCard key={user.id}
              name={user.name}
              image={user.img}
              username={user.username}
              email={user.email}
              />
            })}
          </div>
        </div>
    );
};

const mapStateToProps = (state) => {
  console.log(state)
  return {
      users: state.userReducer.users
  }
}

export default connect(mapStateToProps, {getUsers})(FriendList);