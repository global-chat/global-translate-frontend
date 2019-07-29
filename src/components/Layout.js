import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const Layout = (props) => (
  <Container>
    { props.children }
  </Container>
)