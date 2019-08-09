import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Jumbotron({ children }) {
  return (
    <div
      style={{
        height: 200,
        clear: "both",
        paddingTop: 80,
        textAlign: "center",
        backgroundImage: "url(https://unsplash.it/600)",
        color: "white",
        backgroundSize: "cover"
      }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
