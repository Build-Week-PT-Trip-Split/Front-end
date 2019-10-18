import React from 'react';
import './App.css';
import {getUsers, getTrips} from './actions/index.js';
import {connect} from 'react-redux';

function App(props) {
  return (
    <div className="App">
      <h1>Trip Split</h1>
      <button onClick={() => props.getTrips()}>Get Users</button>
      {/* {console.log("Redux trips", props)} */}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    trips: state.trips
  }
}

export default connect(mapStateToProps, {getTrips})(App);
