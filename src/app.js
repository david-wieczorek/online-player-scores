import React, { Component } from "react";
import Header from "./components/header/header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="wrapper">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
