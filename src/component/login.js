import React, { Component, Fragment } from 'react';
import 'crypto-js/lib-typedarrays';
import Amplify, { Auth } from "aws-amplify";



export default class Login extends Component {

  onLogin = async event => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;
    try {
      await Auth.signIn(username, password);
      alert("Logged in");
    } catch (e) {
      alert(e.message);
    }
  }

  render() {
    return (
      <Fragment>
        <form onSubmit={event => this.onLogin(event)}>
          <div className="container">
            <h1>Login</h1>
            <br />

            <label htmlFor="user-name"><b>Email</b></label>
            <input type="text" placeholder="Enter Username" name="username" required />

            <label htmlFor="password"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="password" required />

            <button className="registerbtn">Login</button>
          </div>
        </form>
      </Fragment>
    );
  }
}