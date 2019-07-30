import React from 'react';
import Layout from './components/layout'
import Jumbotron from './components/jumbotron'
import Card from './components/card'
import Row from 'react-bootstrap/Row'


export const Home = () => (
  <Layout>
    <Jumbotron />
    <Row>
      <Card />
      <Card />
      <Card />
    </Row>
  </Layout>
)

export default Home;
