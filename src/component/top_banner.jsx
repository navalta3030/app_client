import React from 'react'
import {
  Container,
  Alert
} from "reactstrap";


export default function Banner(props) {
  return (
    <div className="top_banner">
      <Container fluid={true}>
        <Alert color="secondary" className="top_banner_alert">
          {props.title}
        </Alert>
      </Container>
    </div>
  )
}
