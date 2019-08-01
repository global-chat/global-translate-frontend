import React, { Component, Fragment } from 'react';
import 'crypto-js/lib-typedarrays';
import { Auth } from "aws-amplify";
import Navigation from './nav';
import '../css/register.css';

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
      <form onSubmit={event => this.onRegister(event)}>
      <div className="theform">
        <div className="container">
          <h2>Register</h2>
          <p>Please fill in this form to create an account.</p>
          <br />
         
          <div className="item1"> 
            <label htmlfor="firstName"><b>First Name</b></label>
          </div>
          <div classname="item2">  
            <input type="text" name="firstName" required />
          </div>

          <div className="item3"> 
            <label htmlfor="lastName"><b>Last Name</b></label>
            </div>
            <div className="item4">
            <input type="text" name="lastName" required />
          </div>

          <div className="item5">
            <label htmlFor="username"><b>Email</b></label>
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

          <div className="item11">
            <label htmlFor="langPref"><b>Language Preference</b></label>
            </div>
            <div className="item12">
            <select>
              <option value="arabic">Arabic</option>
              <option value="chineseT">Chinese (Traditional)</option>
              <option value="chineseS">Chinese (Simplified)</option>
              <option value="czech">Czech</option>
              <option value="danish">Danish</option>
              <option value="dutch">Dutch</option>
              <option value="english">English</option>
              <option value="finnish">Finnish</option>
              <option value="french">French</option>
              <option value="german">German</option>
              <option value="hebrew">Hebrew</option>
              <option value="indonesian">Indonesian</option>
              <option value="italian">Italian</option>
              <option value="japanese">Japanese</option>
              <option value="korean">Korean</option>
              <option value="polish">Polish</option>
              <option value="portuguese">Portuguese</option>
              <option value="russian">Russian</option>
              <option value="spanish">Spanish</option>
              <option value="swedish">Swedish</option>
              <option value="turkish">Turkish</option>
            </select>
          </div>

          <div className="item13">
            <label htmlfor="photo"><b>Profile Pic</b></label>
            </div>
            <div className="item14">
            <input type="file" name="myPic"/>
          </div>

          <button className="registerbtn">Register</button>
          </div>
        </div>
      </form>
      </>
    );
  }
}
