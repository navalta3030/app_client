import { Container, Row, Col } from "reactstrap";
import * as React from "react";
import TopBannerStateInterface from "_interface/State/TopBannerStateInterface";

const BannerComponent: React.FC<TopBannerStateInterface> = ({
  title
}): React.ReactElement => {
  return (
    <div className="top_banner">
      <Container fluid={true}>
        <Row>
          <Col>
            <h1 className="display-5 font-weight-normal home-view-title">
              {title}
            </h1>
            <hr />
            <h4 className="font-weight-normal home-view-description">
              Emerging healthcare and technology with artifical intelligence to
              solve real world problems
              <br></br>
              <br></br>
              <br></br>
            </h4>
            <div className="font-weight-light">
              <ul className="font-italic">
                <li>
                  Chest X-ray Pnuemonia detector (Soon to support other illness)
                </li>
                <li>DNA Sequencing(Coming Soon)</li>
              </ul>
            </div>
          </Col>
          <Col>
            <img
              className="shadow-lg mb-5 rounded"
              src="https://xrayimages.nyc3.cdn.digitaloceanspaces.com/react-static-images/xray-icon.jpg"
              alt="_"
            ></img>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BannerComponent;
