import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import app from "../base.js";
import { AuthContext } from "../Auth.js";
import "../App.css";

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <div className="Login container text-center">
      <h1 className=" mt-5 pt-5">Log in</h1>
      <form onSubmit={handleLogin}>
        <label className="Email m-5">
          Email:
          <input
            className=" ml-1"
            name="email"
            type="email"
            placeholder="Email"
          />
        </label>
        <label className="Password ">
          Password:
          <input
            className=" ml-1"
            name="password"
            type="password"
            placeholder="Password"
          />
        </label>
        <button type="submit">Log in</button>
      </form>
    </div>
  );
};

export default withRouter(Login);