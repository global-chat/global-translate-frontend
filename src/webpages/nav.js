/* eslint-disable no-unused-expressions */
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
    if (!this.props.isAuthenticated) {
      return (
        <Fragment>
          <header>
            <section>
              <h1><a href="/">Found in Translation</a></h1>
              <h2>{this.props.userName}</h2>
              <nav>
                <ul>
                  <li><Route to="/">Home</Route></li>
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
          <header>
            <section>
              <h1><a href="/">Found in Translation</a></h1>
              <h2>{this.props.userName}</h2>
              <nav>
                <ul>
                  <li><Route to="/">Home</Route></li>
                  <li><Link to="/login">Login</Link></li>
                  <li><Link to="/register">Register</Link></li>
                  <li><Link to="/aboutus">About Us</Link></li>
                </ul>
              </nav>

              <button  onClick={this.handleClick}>Start Chat</button>
              <button onClick={this.props.logout}>Logout</button>
            </section>
          </header>
        </Fragment>
      );
    }
  }
}
