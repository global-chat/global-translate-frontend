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
        
          <main>
            <section id="home">
                <h1>Don't get lost in translation...</h1>
                <h2>Allow Found in Translation to bridge the gap in real time!</h2>

                <section>
                        <a href="/register">Sign up now!</a>
                </section>
            </section>
          </main>
        </Layout>
      </Fragment>
    );
  }
}