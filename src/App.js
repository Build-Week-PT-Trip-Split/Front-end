import React from 'react';
import './App.css';
import {getUsers} from './actions/index.js';
import {connect} from 'react-redux';

function App(props) {
  return (
    <div className="App">
      <h1>Trip Split</h1>
      <button onClick={() => props.getUsers()}>Get Users</button>
      {console.log("Redux users", props.users)}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    users: state.users
  }
}

export default connect(mapStateToProps, {getUsers})(App);
