import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import Newindicateur from "../components/Newindicateur";
import Indicateurs from "../components/Indicateurs";
import Execution from "../components/Execution";

export default (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/indicateurs" exact component={Indicateurs} />
      <Route path="/indicateurs/new" exact component={Newindicateur} />
      <Route path="/indicateur_executions" exact component={Execution} />
    </Switch>
  </Router>
);