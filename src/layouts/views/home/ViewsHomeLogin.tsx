import * as React from "react";
import { Row, Col, Card, CardBody } from "reactstrap";

import HomeLoginComponent from "component/Login/HomeLoginComponent";
import AccountInitialState from "reducers/InitialState/AccountInitialState";

class ViewsHomeLogin extends React.Component {
  render(): React.ReactElement {
    return (
      <Row>
        <Col sm="12" md={{ size: 4, offset: 4 }}>
          <Card>
            <CardBody>
              <HomeLoginComponent {...AccountInitialState} />
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default ViewsHomeLogin;
