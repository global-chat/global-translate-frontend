import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Earth from '../images/earth.png';

export default class Navigation extends Component {
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
          <li><Link to="/chat">Chat</Link></li>
          <li><Link to="/aboutus">About Us</Link></li>
        </ul>
        <button onClick={this.props.logout}>Logout</button>
      </nav>
    </Fragment>
    );
  }
}