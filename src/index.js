import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";

import Routes from "./routes";

import "normalize.css";
import "font-awesome/css/font-awesome.min.css";
import "./index.css";

ReactDOM.render(<Routes />, document.getElementById("root"));
registerServiceWorker();
