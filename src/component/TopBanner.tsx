import { Container, Alert } from "reactstrap";
import * as React from "react";
import TopBannerInterface from "interface/TopBannerInterface";

const Banner = (props: TopBannerInterface): React.ReactElement => {
  return (
    <div className="top_banner">
      <Container fluid={true}>
        <Alert color="secondary" className="top_banner_alert">
          {props.title}
        </Alert>
      </Container>
    </div>
  );
};

export default Banner;
