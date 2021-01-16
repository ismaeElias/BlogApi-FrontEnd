import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoginPage from "../pages/Login";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" />
        <Route path="/Login" component={LoginPage} />
      </Switch>
    </BrowserRouter>
  );
}     

export default Routes;
