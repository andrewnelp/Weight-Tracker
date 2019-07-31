import React from "react";
// import React, { Component } from "react";
// import Nav from "./components/Nav";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { AuthProvider } from "./Auth";
import PrivateRoute from "./PrivateRoute";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div>
          <PrivateRoute exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
        </div>
      </Router>
    </AuthProvider>
  );
};

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="Nav">
//           <Nav />
//         </div>
//       </div>
//     );
//   }
// }

export default App;
