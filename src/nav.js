import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Earth from './images/earth.png';

class Nav extends React.Component{





  render(){
    return(
      <>
  <nav>
      <img id="earth-pic" src={Earth} alt="earth"/>
      <p>Global-Chat</p>

      <ul className="nav-menu">
        <li><Route to="/">Home</Route></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/chat">Chat</Link></li>
        <li><Link to="/aboutus">About Us</Link></li>
      </ul>
    </nav>
      </>
    )

  }
}

export default Nav;