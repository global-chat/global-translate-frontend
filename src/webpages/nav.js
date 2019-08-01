import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Earth from '../images/earth.png';
import Navbar from 'react-bootstrap/Navbar'

export default class Navigation extends Component {
  render() {
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
            <h1>{this.props.userName}</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          {/* <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse> */}
        </Navbar>
      </Fragment>
    );
  }
}