import React, { Component, Fragment } from 'react';
import Navigation from './nav';
import Layout from '../components/Layout';
import Jumbotron from '../components/jumbotron';
import Card from '../components/card';
import Row from 'react-bootstrap/Row';


export default class Home extends Component {
  render() {
    return (
      <Fragment>
        <Navigation props={this.props} logout={this.props.logoutUser} userName={this.props.userName} userToken={this.props.userToken}></Navigation>

        <Layout>
          <Jumbotron />
          <Row>
            <Card />
            <Card />
            <Card />
          </Row>
        </Layout>
      </Fragment>

    );
  }
}