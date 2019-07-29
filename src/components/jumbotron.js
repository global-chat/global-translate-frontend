import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Jumbrotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'

export const Jumbotron = (props) => (
  <Row>
    <Col>
      <Jumbrotron>
        <h1>Hello, world!</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for calling
          extra attention to featured content or information.
        </p>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
      </Jumbrotron>
    </Col>
  </Row>
)

export default Jumbotron