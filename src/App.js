import React from 'react';
import './App.css';
import {getUsers, getTrips} from './actions/index.js';
import {connect} from 'react-redux';
import Nav from './components/Nav';
import PrivateRoute from './components/PrivateRoute';
import {Route} from 'react-router-dom';
import SignUp from './components/SignUp';

function App(props) {

  return (
    <div className="App">
      <Nav />
      <h1>Trip Split</h1>
      <button onClick={() => props.getTrips()}>Get Users</button>
      {/* {console.log("Redux trips", props)} */}
      <Route path="/signup" render={props => <SignUp {...props}/>} />
      {/* <PrivateRoute path="/trips" component={TripsList}/> */}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    trips: state.trips
  }
}

export default connect(mapStateToProps, {getTrips})(App);
