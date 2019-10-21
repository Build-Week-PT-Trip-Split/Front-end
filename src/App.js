import React, {useState} from 'react';
import './App.css';
import {connect} from 'react-redux';
import Nav from './components/Nav';
import PrivateRoute from './components/PrivateRoute';
import {Route} from 'react-router-dom';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import FriendList from './components/friends/FriendList';
import AddTrip from './components/trips/AddTrip.js';

// Import Components

// import SignUp from './components/SignUp.js';
// import NavBar from './components/Nav.js';
import TripsList from './components/trips/TripsList.js';

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
      <Route path="/signup" render={props => <SignUp {...props} setAuth={setAuth}/>} />
      <Route path="/login" render={props => <LogIn {...props} setAuth={setAuth}/>} />
      {/* This following route makes sure you get redirected correctly as soon as you load the app */}
      <PrivateRoute path='/' exact component={TripsList} />
      <PrivateRoute path="/trips" component={TripsList}/>
      <PrivateRoute path="/friends" component={FriendList} />
      <PrivateRoute path="/new/trip" component={AddTrip} />
      {/* <PrivateRoute path="/profile" component={Profile} /> */}
    </div>
  );
}

export default connect(null, {})(App);
