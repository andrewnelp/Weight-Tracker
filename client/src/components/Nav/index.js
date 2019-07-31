import React from "react";
import app from "../../base.js";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
      <a className="navbar-brand" href="/">
        Weight Tracker
      </a>
      <div className="align-center">
        <button
          className="btn btn-secondary btn-sm"
          onClick={() => app.auth().signOut()}
        >
          Sign Out
        </button>
      </div>
    </nav>
  );
}

export default Nav;
