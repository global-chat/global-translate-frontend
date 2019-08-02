import React, { Component, Fragment } from 'react';
import 'crypto-js/lib-typedarrays';
import { Auth } from "aws-amplify";
import Navigation from './nav';
// import '../css/register.css';
// import '../scss/core.scss';

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
      <>
      <Navigation></Navigation>
      <section id="register">
      <form onSubmit={event => this.onRegister(event)}>
      <div className="theform">
        <div className="container">
          <h2>Register</h2>
          <p>Please fill in this form to create an account.</p>
          <br />
      
          <div className="item5">
            <label htmlFor="username"><b>Username</b></label>
            </div>
            <div className="item6">
            <input type="text" name="username" required />
          </div>

          <div className="item7">
            <label htmlFor="password"><b>Password</b></label>
            </div>
            <div className="item8">
            <input type="password" name="password" required />
          </div>

          <div className="item9">
            <label htmlFor="passwordRepeat"><b>Confirm Password</b></label>
            </div>
            <div className="item10">
            <input type="password" name="passwordRepeat" required />
          </div>

          <button className="registerbtn">Register</button>
          </div>
        </div>
      </form>
      </section>
      </>
    );
  }
}
