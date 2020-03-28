import { Container, Alert } from "reactstrap";
import * as React from "react";

const BannerComponent: React.FC<{ title: string }> = ({
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
