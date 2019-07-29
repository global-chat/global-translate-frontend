import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// export class Home extends Component {
//   render() {
//     return (
//       <Container>

//       </Container>
//     );
//   }
// }

// export default Home;

export const Home = () => (
  <Container>
    <Row>
      <Col xs={12} md={8}>
        <h1>Home Page</h1>
      </Col>
    </Row>
  </Container>
)

export default Home;
