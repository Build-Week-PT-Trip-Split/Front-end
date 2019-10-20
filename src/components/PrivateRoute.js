import React from 'react'
import {Route, Redirect} from 'react-router-dom';

function PrivateRoute({component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        localStorage.getItem("token") ? <Component /> : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}


export default PrivateRoute;

