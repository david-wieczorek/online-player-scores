import React, { Component } from 'react';
import GraphBar from '../../components/graphbar/graphbar';

class Graphsview extends Component {
  render() {
    return (
      <div>
        <h1 className="page-title">Graphs page</h1>
        <div className="wrapper-content">
          <div className="content">
            <h2>Fetch data from http://cdn.55labs.com/demo/api.json</h2>
            <GraphBar data={[5, 10, 1, 3, 5, 10, 1, 3]} size={[500, 500]} />
          </div>
        </div>
      </div>
    );
  }
}

export default Graphsview;
