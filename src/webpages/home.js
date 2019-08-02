import React, { Component, Fragment } from 'react';
import Navigation from './nav';
import Layout from '../components/layout';
// import '../css/home.css';
// import '../css/cover.css';
import '../css/main.css'


export default class Home extends Component {
  render() {
    return (
      <Fragment>
        <Layout>
          {/* <Navigation props={this.props} logout={this.props.logoutUser} userName={this.props.userName} userToken={this.props.userToken}></Navigation> */}
        
          {/* <main role="main" className="inner cover ">
              <h1 className="cover-heading">Cover your page.</h1>
              <p className="lead">Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.</p>
              <p className="lead">
                <a href="#" className="btn btn-lg btn-secondary">Learn more</a>
              </p>
          </main>  */}
        </Layout>
      </Fragment>
    );
  }
}