import React from "react";
import { Route, HashRouter } from "react-router-dom";

import App from "./app";
import Home from "./views/home";
import Graphs from "./views/graphs";

const Routes = () =>
  <HashRouter>
    <App>
      <Route exact path="/" component={Home} />
      <Route path="/graphs" component={Graphs} />
    </App>
  </HashRouter>;

export default Routes;
