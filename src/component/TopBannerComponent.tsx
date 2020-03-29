import { Container, Alert } from "reactstrap";
import * as React from "react";
import TopBannerComponentInterface from "_interface/component/TopBannerComponentInterface";

const BannerComponent: React.FC<TopBannerComponentInterface> = ({
  title
}): React.ReactElement => {
  return (
    <div className="top_banner">
      <Container fluid={true}>
        <Alert color="secondary" className="top_banner_alert">
          {title}
        </Alert>
      </Container>
    </div>
  );
};

export default BannerComponent;
