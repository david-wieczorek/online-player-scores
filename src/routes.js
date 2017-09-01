import React from "react";
import { Route, HashRouter } from "react-router-dom";

import App from "./app";
import Home from "./views/home";
import Codeview from "./views/code";

const Routes = () =>
  <HashRouter>
    <App>
      <Route exact path="/" component={Home} />
      <Route path="/codes" component={Codeview} />
    </App>
  </HashRouter>;

export default Routes;
