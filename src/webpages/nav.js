/* eslint-disable no-unused-expressions */
import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Earth from '../images/earth.png';
// import Navbar from 'react-bootstrap/Navbar'
// import Nav from 'react-bootstrap/Navbar'
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

// export default class Navigation extends Component {
//   render() {
//     if (this.props.loggedIn) {
//       return (
//         <Fragment>
//           <Navbar expand="lg" fixed="top" className="navbarOuter">
//             <Navbar.Brand className="brandSection" href="/">
//               <img id="earth-pic" src={Earth} alt="earth"/>
//               {' Found in Translation'}
//               {this.props.userName}
//             </Navbar.Brand>
//             <Navbar.Toggle aria-controls="basic-navbar-nav" />
//             <Navbar.Collapse id="basic-navbar-nav">
//               <Nav className="ml-auto nav-menu">
//                 <Link to="/">Home</Link>
//                 <Link to="/login">Login</Link>
//                 <Link to="/register">Register</Link>
//                 <Link to="/chat">Chat</Link>
//                 <Link to="/aboutus">About Us</Link>
//                 <Link onClick={this.props.logout}>Logout</Link>
//               </Nav>
//             </Navbar.Collapse>
//           </Navbar>
//         </Fragment>
//       );
//     } else {
//       return (
//         <Fragment>
//           <Navbar expand="lg" fixed="top" className="navbarOuter">
//             <Navbar.Brand href="/">
//               <img id="earth-pic" src={Earth} alt="earth"/>
//               {' Found in Translation'}
//             </Navbar.Brand>
//             <Navbar.Toggle aria-controls="basic-navbar-nav" />
//             <Navbar.Collapse id="basic-navbar-nav">
//               <Nav className="ml-auto nav-menu">
//                 <Link to="/">Home</Link>
//                 <Link to="/login">Login</Link>
//                 <Link to="/register">Register</Link>
//                 <Link to="/aboutus">About Us</Link>
//               </Nav>
//             </Navbar.Collapse>
//           </Navbar>
//         </Fragment>
//       );
//     }
//   }
// }

export const NavComponent = (props) => (
  <header>
  <section>
    <h1><a href="/">Found in Translation</a></h1>
    
    <nav>
      <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/login">Login</a></li>
          <li><a href="/register">Register</a></li>
          <li><a href="aboutus">About Us</a></li>
      </ul>
    </nav>
  </section>
</header>
)

export default NavComponent