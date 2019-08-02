import React from 'react';
import NavComponent from '../webpages/nav';
//import Footer from './components/footer.js'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Layout = (props) => (
  <Container>
    <Row>
      <Col>
        <NavComponent />
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