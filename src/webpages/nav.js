/* eslint-disable no-unused-expressions */
import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import {Redirect} from 'react-router-dom';
import Earth from '../images/earth.png';
import '../css/navbarStyle.css';


export default class Navigation extends Component {
  handleClick=(e) =>{
    e.preventDefault();
    console.log('The link was clicked.');
    this.props.props.history.push("/chat")
  };
  render() {
    if (!this.props.auth) {
      return (
        <Fragment>
          <header className="navigation">
            <section>
              <h1><Link to="/">Found in Translation</Link></h1>
              <nav>
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/login">Login</Link></li>
                  <li><Link to="/register">Register</Link></li>
                  <li><Link to="/aboutus">About Us</Link></li>
                </ul>
              </nav>
            </section>
          </header>
        </Fragment>
      );
    } else {
      return (
        <Fragment>
          <header className="navigation">
            <section>
              <h1><Link to="/">Found in Translation</Link></h1>
              <nav>
                <ul>
                  <li>Hello {this.props.userName}!</li>
                  <li><Link to="/">Home</Link></li>
                  <li onClick={this.handleClick}>Chat</li>
                  <li><Link to="/aboutus">About Us</Link></li>
                  <li onClick={this.props.logout}>Logout</li>
                </ul>
              </nav>
            </section>
          </header>
        </Fragment>
      );
    }
  }
}
