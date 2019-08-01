import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Earth from '../images/earth.png';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Navbar'

export default class Navigation extends Component {
  render() {
    if (this.props.loggedIn) {
      return (
        <Fragment>
          {/* <nav>
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
          </nav> */}
  
          <Navbar bg="light" expand="lg" fixed="top">
            <Navbar.Brand href="#home">
              <img id="earth-pic" src={Earth} alt="earth"/>
              {' Found in Translation'}
              {this.props.userName}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto" className="nav-menu">
                <Link to="/">Home</Link>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
                <Link to="/chat">Chat</Link>
                <Link to="/aboutus">About Us</Link>
                <Link onClick={this.props.logout}>Logout</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Fragment>
      );
    } else {
      return (
        <Fragment>
          <Navbar bg="light" expand="lg" fixed="top">
            <Navbar.Brand href="#home">
              <img id="earth-pic" src={Earth} alt="earth"/>
              {' Found in Translation'}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto" className="nav-menu">
                <Link to="/">Home</Link>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
                <Link to="/aboutus">About Us</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Fragment>
      );
    }

  }
}