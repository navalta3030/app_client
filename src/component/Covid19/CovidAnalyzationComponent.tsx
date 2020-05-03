import { Container, Row, Col } from "reactstrap";
import * as React from "react";

const CovidAnalyzationComponent: React.FC = (): React.ReactElement => {
  return (
    <div>
      <Container fluid={true}>
        <div className="display-4 mx-auto text-center">
          Analyzation of covid-19 cases world-wide
        </div>
        <Row className="Covid-19-analyzation">
          <Col lg="5">
            <img
              src="https://github.com/tarunk04/COVID-19-CaseStudy-and-Predictions/raw/master/v61/output/COIVD-19-World.png"
              alt="_"
            ></img>
          </Col>
          <Col lg="7">
            <img
              src="https://github.com/tarunk04/COVID-19-CaseStudy-and-Predictions/raw/master/v61/output/Prediction%20Curve-Confirmed.png"
              alt="_"
            ></img>
          </Col>
        </Row>
        <Row>
          <Col lg="12">
            <img
              src="https://github.com/tarunk04/COVID-19-CaseStudy-and-Predictions/raw/master/v61/output/daily%20confirmed%20cases%20global.png"
              alt="_"
            ></img>
          </Col>
        </Row>
      </Container>
      <p className="mx-auto text-center">
        <a
          href="https://github.com/tarunk04/COVID-19-CaseStudy-and-Predictions"
          target="_blank"
          rel="noopener noreferrer"
        >
          &copy; tarunk04
        </a>
      </p>
    </div>
  );
};

export default CovidAnalyzationComponent;
