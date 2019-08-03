import React, { Component } from "react";
// import AppNavbar from "../components/AppNavbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../App.css";
import Nav from "../components/Nav";
import ListData from "../components/ListData";
import EditData from "../components/EditData";
import CreateData from "../components/CreateData";

class Home extends Component {
  render() {
    return (
      <Router>
        <Nav />
        <br />
        <Route path="/" exact component={ListData} />
        <Route path="/edit/:id" component={EditData} />
        <Route path="/create" component={CreateData} />
      </Router>
    );
  }
}

export default Home;
