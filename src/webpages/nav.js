import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Earth from '../images/earth.png';
import {Redirect} from 'react-router-dom';

export default class Navigation extends Component {
  handleClick=(e) =>{
    e.preventDefault();
    console.log('The link was clicked.');
    this.props.props.history.push("/chat")
  };
  render() {
    return (
      <Fragment>

      <nav>
        <img id="earth-pic" src={Earth} alt="earth"/>
        <p>Found-In-Translation</p>
        <h1>{this.props.userName}</h1>
        <ul className="nav-menu">
          <li><Route to="/">Home</Route></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/register">Register</Link></li>
          <li><Link to="/aboutus">About Us</Link></li>
        </ul>
        <button  onClick={this.handleClick}>Start Chat</button>
        <button onClick={this.props.logout}>Logout</button>
      </nav>
    </Fragment>
    );
  }
}