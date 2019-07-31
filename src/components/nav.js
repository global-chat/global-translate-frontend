import React, { Component, Fragment } from 'react';
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
        <h1>{this.props.userName}</h1>
        <button  onClick={this.handleClick}>Start Chat</button>
        <button onClick={this.props.logout}>Logout</button>
      </Fragment>
    );
  }
}