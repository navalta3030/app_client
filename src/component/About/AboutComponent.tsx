import { Container, Row, Col } from "reactstrap";
import * as React from "react";

const AboutComponent: React.FC = (): React.ReactElement => {
  return (
    <div className="about_component">
      <Container fluid={true}>
        <Row>
          <Col>
            <p className="display-4">Vision</p>
            <div>
              <p>
                Provide a free software to gradually conduct first level
                screening of Chest X-ray in order to detect available diseases
                such as Pneumonia, Effusion, and others which may also depend on
                the data that is available in order to provide better workflow
                within the health organization.
              </p>

              <p>
                Software is currently in proof of concept that can detect
                Pneumonia which has <b>95%</b> accuracy using open sourced chest
                x-ray images coming from doctors of University Of San Diego
                California however,
                <b>
                  <i>
                    even with high accuracy this would only be specific with the
                    machine used by the hospital of UC San Diego and may
                    differentiate in terms of pixel, quality, and opacity with
                    the machine being used by other hospitals.
                  </i>
                </b>
              </p>

              <p>
                <ul>
                  <li>
                    In order to have a more specific and accurate result, it
                    would be best if per hospital is a seperate research and
                    development.
                  </li>
                  <li>
                    The goal is to assist doctors not to be replaced. Doctors
                    can focus more on R&D if the product is viable.
                  </li>
                </ul>
              </p>
            </div>
          </Col>
        </Row>

        <hr></hr>

        <Row>
          <Col>
            <p className="display-4">Features Supported and their accuracy</p>
            <ol>
              <li>Pneumonia - 95%</li>
            </ol>
          </Col>
        </Row>

        <hr></hr>

        <Row>
          <Col>
            <p className="display-4">Development</p>
            <p>
              XR-S is developed by{" "}
              <a
                href="https://www.linkedin.com/in/navalta/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Mark Navalta{" "}
              </a>
              and is currently not open-sourced. However collaboration is still
              open if essential.
            </p>

            <p>
              Data used from UC San Diego can be found{" "}
              <a
                href="https://data.mendeley.com/datasets/rscbjbr9sj/2"
                target="_blank"
                rel="noopener noreferrer"
              >
                here
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutComponent;
