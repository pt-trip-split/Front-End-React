import React, { useState } from "react";

import { Route, Redirect } from "react-router-dom";

import "./App.css";

// components
import Home from "./components/home/Home.js";
function App() {
  return (
    <>
      <Route path="/register" component={Home} />
      <PrivateRoute exact path="/" component={WebApp} />
    </>
  );
}

// the private route will check to make sure that the user has an authentication token, if they dont it will redirect them to the login page.
const PrivateRoute = ({ component: WebApp, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      localStorage.token ? <WebApp {...props} /> : <Redirect to="/register" />
    }
  />
);

export default App;
