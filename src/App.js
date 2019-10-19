import React from 'react';
import './App.css';
import {getUsers, getTrips} from './actions/index.js';
import {connect} from 'react-redux';

// Import Components

import LogIn from './components/LogIn.js';
import SignUp from './components/SignUp.js';
import NavBar from './components/Nav.js';

function App(props) {
  return (
    <div className="App">
      <NavBar />
      <h1>Trip Split</h1>
      <LogIn />
      <SignUp />
      <button onClick={() => props.getTrips()}>Get Users</button>
      {/* {console.log("Redux trips", props)} */}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    // trips: state.trips
  }
}

export default connect(mapStateToProps, {getTrips})(App);
