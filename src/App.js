import React, {useState} from 'react';
import './App.css';
import {connect} from 'react-redux';
import Nav from './components/Nav';
import PrivateRoute from './components/PrivateRoute';
import {Route} from 'react-router-dom';

// Import Components

// Registration & Authentication
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';

// Trips Components
import AddTrip from './components/trips/AddTrip.js';
import TripsList from './components/trips/TripsList.js';
import TripDetail from './components/trips/TripDetail.js';
import UpdateTrip from './components/trips/UpdateTrip.js';

// Expenses Components
import ExpenseList from './components/expenses/ExpenseList';

import FriendList from './components/friends/FriendList';
import Profile from './components/Profile';

function App(props) {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("token") ? true : false
  );

  const setAuth = (boolean) => {
    setIsAuthenticated(boolean);
  }

  console.log(isAuthenticated);

  return (
    <div className="App container">
      <Nav setAuth={setAuth} isAuthenticated={isAuthenticated}/>
      <Route path="/signup" render={props => isAuthenticated ? props.history.push('/trips') : <SignUp {...props} setAuth={setAuth} isAuthenticated={isAuthenticated}/>
      } />
      <Route path="/login" render={props => isAuthenticated ? props.history.push('/trips') : <LogIn {...props} setAuth={setAuth} isAuthenticated={isAuthenticated}/>} />
      {/* This following route makes sure you get redirected correctly as soon as you load the app */}
      <PrivateRoute path='/' exact component={TripsList} />
      <PrivateRoute path="/trips" component={TripsList}/>

      <PrivateRoute path="/trip/:id" component={TripDetail} />

      <PrivateRoute path="/new/trip" component={AddTrip} />
      <PrivateRoute path="/edit/trip/:id" component={UpdateTrip} />

      <PrivateRoute path="/friends" component={FriendList} />
      <PrivateRoute path="/expenses" component={ExpenseList}/>
      <PrivateRoute path="/profile" component={Profile} />
    </div>
  );
}

export default connect(null, {})(App);
