import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import {Redirect} from 'react-router-dom';
import Navigation from './nav';
import Layout from '../components/Layout';
import '../css/main.css'


export default class Home extends Component {
  render() {
    return (
      <Fragment>
        <Layout>
          <Navigation auth={this.props.isAuthenticated} props={this.props} logout={this.props.logoutUser} userName={this.props.userName} userToken={this.props.userToken}></Navigation>
        
          <main>
            <section id="home">
                <h1>Don't get lost in translation...</h1>
                <h2>Allow Found in Translation to bridge the gap in real time!</h2>

                <section>
                        <Link to="/register">Sign up now!</Link>
                </section>
            </section>
          </main>
        </Layout>
      </Fragment>
    );
  }
}