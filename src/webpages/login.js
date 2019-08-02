import React, { Component, Fragment } from 'react';
import 'crypto-js/lib-typedarrays';
import { Auth } from "aws-amplify";
import Navigation from './nav';
import '../css/login.css';




export default class Login extends Component {

  onLogin = async event => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;
    try {
      const user = await Auth.signIn(username, password);
      this.props.setUserName(user['username']);
      this.props.setUserToken(user['signInUserSession'].accessToken.jwtToken);
      this.props.authenticateUser(true);
      this.props.history.push("/")
    } catch (e) {
      alert(e.message);
    }
  }

  render() {
    return (
      <Fragment>
        <Navigation auth={this.props.isAuthenticated} props={this.props} logout={this.props.logoutUser} userName={this.props.userName} userToken={this.props.userToken}></Navigation>
        <div className="login">
          <form onSubmit={event => this.onLogin(event)}>
            <div className="container">
              <h1>Login</h1>
              <br />

              <label htmlFor="user-name"><b>Username</b></label>
              <br />
              <input type="text" placeholder="Enter Username" name="username" required />
              <br />
              <label htmlFor="password"><b>Password</b></label>
              <br />
              <input type="password" placeholder="Enter Password" name="password" required />
              <br />
              <button className="registerbtn">Login</button>
            </div>
          </form>
        </div>
      </Fragment>
    );
  }
}