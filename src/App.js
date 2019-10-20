import React, {useEffect} from 'react';
import './App.css';
import {getUsers, getTrips} from './actions/index.js';
import {connect} from 'react-redux';

// Import Components

import LogIn from './components/LogIn.js';
import SignUp from './components/SignUp.js';
import NavBar from './components/Nav.js';
import TripsList from './components/trips/TripsList.js';
import AddTrip from './components/trips/AddTrip.js';

function App(props) {
  useEffect(() => {
    props.getTrips();
  }, [])
  
  return (
    <div className="App">
      <NavBar />
      <h1>Trip Split</h1>
      <AddTrip />
      <TripsList />
    </div>
  );
}

export default connect(null, {getTrips})(App);
