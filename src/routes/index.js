import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "../containers";
import { HOME } from "./paths";

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path={HOME} component={Home} />
    </Switch>
  </Router>
);

export default Routes;
