import {
  Container,
  Alert
} from "reactstrap";
import * as React from 'react';
import topBannerInterface from 'interface/topbanner';

const Banner: React.SFC<topBannerInterface> = (props) => {
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

export default Banner;
