import React, { Component } from "react";
import Graphbar from "../../components/graphbar/graphbar";

class Graphsview extends Component {
  render() {
    return (
      <div>
        <h1 className="page-title">Graphs page</h1>
        <div className="wrapper-content">
          <div className="content">
            <h2>Fetch data from http://cdn.55labs.com/demo/api.json</h2>
            <Graphbar />
          </div>
        </div>
      </div>
    );
  }
}

export default Graphsview;
