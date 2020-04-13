import * as React from "react";
import { Row, Col, Card, CardBody } from "reactstrap";

import ViewsHomeLoginInterface from "_interface/layouts/views/home/ViewsHomeLoginInterface";
import HomeLoginComponent from "component/HomeLoginComponent";
import { UserLogin } from "action/AccountAction";
import AccountInitialState from "reducers/InitialState/AccountInitialState";

class ViewsHomeLogin extends React.Component<ViewsHomeLoginInterface> {
  render(): React.ReactElement {
    return (
      <Row>
        <Col sm="12" md={{ size: 4, offset: 4 }}>
          <Card>
            <CardBody>
              <HomeLoginComponent
                UserLogin={(): any => UserLogin(null)}
                {...AccountInitialState}
              />
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default ViewsHomeLogin;
