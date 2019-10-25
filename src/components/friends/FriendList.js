import React, {useEffect} from "react";
import {connect} from 'react-redux';
import {getUsers} from '../../actions/index.js';
import FriendCard from './FriendCard';
import { Button } from 'reactstrap';

const FriendList = (props) => {

    useEffect( () => {
      props.getUsers();
    }, []);

    return (
        <div>
          <h1>Friends</h1>
          <Button color="primary">Add New Friend</Button>
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