import React from 'react';
import Navbar from '../webpages/nav';
//import Footer from './components/footer.js'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Layout = (props) => (
  <Container>
    <Row>
      <Col>
<<<<<<< HEAD
        {/* <h1 class="bg-info">Navbar</h1> */}
        {/* <Navbar props={this.props} logout={this.props.logoutUser} userName={this.props.userName} userToken={this.props.userToken}></Navbar>  */}
=======
        <h1 className="bg-info">Navbar</h1>
>>>>>>> 2e7375029728c253d73860b34d36984b85a41c2b
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