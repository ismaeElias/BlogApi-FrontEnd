import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import LoginPage from "../pages/Login";
import HomePage from "../pages/Home";
import SingIn from "../pages/SingIn";
import { PrivateRoute } from "./privateRoute";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route path="/login" component={LoginPage} />
        <PrivateRoute path="/home" component={HomePage} />
        <Route path="/SingIn" component={SingIn} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
