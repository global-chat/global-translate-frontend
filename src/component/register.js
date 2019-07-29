import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

var AmazonCognitoIdentity = require('amazon-cognito-identity-js');

var poolData = {
  UserPoolId : process.env.REACT_APP_USER_POOL,
  ClientId: process.env.REACT_APP_CLIENT_ID
}
var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

var attributeList = [];


export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cognitoUser: null
    }
  }
  
  onRegister = (event) => {
    var username = event.target.email.value;
    var password = event.target.psw.value;
    event.preventDefault();

    userPool.signUp(username, password, attributeList, null, function(err, result){
      if (err) {
          alert(err.message);
      }
      this.setState({cognitoUser : result.user});
      console.log('user name is ' + this.state.cognitoUser.getUsername());
  });

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