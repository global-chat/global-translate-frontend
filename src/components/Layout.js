import React from 'react';
//import Footer from './components/footer.js'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const Layout = (props) => (
  <Container>
    <Row>
      <Col>
        <h1 class="bg-info">Navbar</h1>
      </Col>
    </Row>
    <Row>
      <Col>
        { props.children }
      </Col>
    </Row>
    <Row>
      <Col>
        {/* <Footer /> */}
      </Col>
    </Row>
  </Container>
)

export default Layout