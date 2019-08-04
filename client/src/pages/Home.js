import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AppNavbar from "../components/AppNavbar";
import ListData from "../components/ListData";
import EditData from "../components/EditData";
import CreateData from "../components/CreateData";

class Home extends Component {
  render() {
    return (
      <Router>
        <div>
          <AppNavbar />
          <Switch>
            <Route path="/" exact component={ListData} />
            <Route path="/edit/:id" component={EditData} />
            <Route path="/create" component={CreateData} />
            {/* <Route component={NotFound} /> */}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Home;
