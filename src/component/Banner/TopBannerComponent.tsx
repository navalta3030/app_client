import { Container, Alert } from "reactstrap";
import * as React from "react";
import TopBannerStateInterface from "_interface/State/TopBannerStateInterface";

const BannerComponent: React.FC<TopBannerStateInterface> = ({
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
