import React, { Component, Fragment } from 'react';
import 'crypto-js/lib-typedarrays';
import { Auth } from "aws-amplify";

export default class Register extends Component {

  onRegister = async event => {
    event.preventDefault();
    const userName = event.target.username.value;
    const passWord = event.target.password.value;
    if (passWord === event.target.passwordRepeat.value) {
      try {
        await Auth.signUp({
          username: userName,
          password: passWord
        });
        const newUser = await Auth.signIn(userName, passWord);
        this.props.setUserName(newUser['username']);
        this.props.setUserToken(newUser['signInUserSession'].accessToken.jwtToken);
        this.props.history.push("/");
      } catch (e) {
        alert(e.message);
      }
    }
  }
  render() {
    return (
      <form onSubmit={event => this.onRegister(event)}>
        <div className="container">
          <h1>Register</h1>
          <p>Please fill in this form to create an account.</p>
          <br />
          <label htmlfor="firstName"><b>First Name</b></label>
          <input type="text" placeholder="First Name" name="firstName" required />

          <label htmlfor="lastName"><b>Last Name</b></label>
          <input type="text" placeholder="Last Name" name="lastName" required />

          <label htmlFor="username"><b>Email</b></label>
          <input type="text" placeholder="Enter Email" name="username" required />

          <label htmlFor="password"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="password" required />

          <label htmlFor="passwordRepeat"><b>Confirm Password</b></label>
          <input type="password" placeholder="Repeat Password" name="passwordRepeat" required />

          <label htmlfor="photo"><b>Profile Pic</b></label>
          <input type="file" name="myPic"/>

          <button className="registerbtn">Register</button>
        </div>
      </form>
    );
  }
}
