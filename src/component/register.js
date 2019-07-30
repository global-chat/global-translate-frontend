import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';


const AmazonCognitoIdentity = require('amazon-cognito-identity-js');


let globalUsername;
let token;

const poolData = {
  UserPoolId: process.env.REACT_APP_USER_POOL,
  ClientId: process.env.REACT_APP_CLIENT_ID
}

const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);


export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: null,
      userToken: null,
    }

  }

  onRegister = (event) => {
    const username = event.target.email.value;
    const password = event.target.psw.value;
    event.preventDefault();

    userPool.signUp(username, password, [], null, function (err, result) {
      if (err) {
        alert(err.message);
        return;
      }

      globalUsername = result.user.getUsername();
      token = result.userSub;
    })
  }


  render() {
    return (
      <form onSubmit={event => this.onRegister(event)}>
        <div className="container">
          <h1>Register</h1>
          <p>Please fill in this form to create an account.</p>
          <br />

          <label htmlFor="email"><b>Email</b></label>
          <input type="text" placeholder="Enter Email" name="email" required />

          <label htmlFor="psw"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="psw" required />

          <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
          <input type="password" placeholder="Repeat Password" name="psw-repeat" required />

          <button className="registerbtn">Register</button>
        </div>
      </form>
    );
  }
}