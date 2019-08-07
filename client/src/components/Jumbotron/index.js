import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Jumbotron({ children }) {
  return (
    <div
      style={{
        height: 200,
        clear: "both",
        paddingTop: 80,
        textAlign: "center"
      }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
