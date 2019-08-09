import React, { Component } from "react";
import { Link } from "react-router-dom";
import app from "../../base.js";
import { Button } from "reactstrap";

export default class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">
          <strong>Weight Tracker</strong>
        </Link>
        <div className="collpase navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/create" className="nav-link">
                Enter Day Data
              </Link>
            </li>
            <li>
              <Button
                outline
                color="warning"
                size="sm"
                onClick={() => app.auth().signOut()}
              >
                Sign Out
              </Button>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
