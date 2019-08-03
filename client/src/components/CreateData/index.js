import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class CreateData extends Component {
  render() {
    return (
      <div>
        <p> Create Data component</p>
        <Link to="/">← Back to Home</Link>
      </div>
    );
  }
}
