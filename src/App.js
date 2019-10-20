import React, {useState} from 'react';
import './App.css';
import {getUsers, getTrips} from './actions/index.js';
import {connect} from 'react-redux';
import Nav from './components/Nav';
import PrivateRoute from './components/PrivateRoute';
import {Route} from 'react-router-dom';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import TripsList from './components/TripsList';
import FriendList from './components/friends/FriendList';

function App(props) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const setAuth = (boolean) => {
    setIsAuthenticated(boolean);
  }

  console.log(isAuthenticated);

  return (
    <div className="App">
      <Nav setAuth={setAuth} isAuthenticated={isAuthenticated}/>
      <h1>Trip Split</h1>
      <button onClick={() => props.getTrips()}>Get Users</button>
      {/* {console.log("Redux trips", props)} */}
      <Route path="/signup" render={props => <SignUp {...props} setAuth={setAuth}/>} />
      <Route path="/login" render={props => <LogIn {...props} setAuth={setAuth}/>} />
      {/* This following route makes sure you get redirected correctly as soon as you load the app */}
      <PrivateRoute path='/' exact component={TripsList} />
      <PrivateRoute path="/trips" component={TripsList}/>
      <PrivateRoute path="/friends" component={FriendList} />
      {/* <PrivateRoute path="/profile" component={Profile} /> */}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    trips: state.trips
  }
}

export default connect(mapStateToProps, {getTrips})(App);
