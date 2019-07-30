import React, { Component, Fragment } from 'react';
import Navigation from './nav';


export default class Home extends Component {
  render() {
    return (
      <Fragment>
        <Navigation logout={this.props.logoutUser} userName = {this.props.userName} userToken = {this.props.userToken}></Navigation>
      </Fragment>
    );
  }
}