import React, { Component, Fragment } from 'react';

export default class Navigation extends Component {
  render() {
    return (
      <Fragment>
        <h1>{this.props.userName}</h1>
        <button onClick={this.props.logout}>Logout</button>
      </Fragment>
    );
  }
}