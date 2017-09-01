import React, { Component } from "react";
import Fetchdata from "../../components/mycomp/mycomp";
import Testfetch from "../../components/testfetch/testfetch";

class Codeview extends Component {
  render() {
    return (
      <div>
        <h1 className="page-title">
          <i className="fa fa-code" aria-hidden="true" /> Code test
        </h1>
        <div className="wrapper-content">
          <div className="content">
            <div className="bloc-wrapper">
              <div className="bloc bloc-nobckcolor">
                <h2>Test fetch from local node server</h2>
                <Testfetch />
              </div>
            </div>
          </div>
          <div className="content">
            <div className="bloc-wrapper">
              <div className="bloc bloc-nobckcolor">
                <h2>Fetch data Component</h2>
                <Fetchdata />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Codeview;
