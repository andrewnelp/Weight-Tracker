import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { AuthProvider } from "./Auth";
import PrivateRoute from "./PrivateRoute";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div>
          <Switch>
            <PrivateRoute exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
