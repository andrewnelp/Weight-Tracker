import React, { useCallback } from "react";
import { withRouter } from "react-router";
import app from "../base.js";
import "../App.css";

const SignUp = ({ history }) => {
  const handleSignUp = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  return (
    <div className="Signup container text-center m-5">
      <h1 className=" mt-5 pt-5">Sign Up</h1>
      <form className="" onSubmit={handleSignUp}>
        <label>
          Email:
          <input
            className="Email ml-1 mb-5"
            name="email"
            type="email"
            placeholder="Email"
          />
        </label>
        <label className="ml-5">
          Password:
          <input
            className=" ml-1"
            name="password"
            type="password"
            placeholder="Password"
          />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default withRouter(SignUp);
