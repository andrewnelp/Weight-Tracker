import React, { Component } from "react";
import Nav from "./components/Nav";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Nav">
          <Nav />
        </div>
      </div>
    );
  }
}

export default App;
