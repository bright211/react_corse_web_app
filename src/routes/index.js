import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import {PrivateRoute} from './PrivateRoute'

function Routes() {
  return (
    <Switch>
      <Route exact path={`/login`} component={Login} />
      <PrivateRoute exact path="/home" component={Home} />
      <Redirect from="/" to="login" />
    </Switch>
  );
}

export default Routes;
