import * as React from "react";
import {
  FacebookLoginButton,
  GoogleLoginButton,
  GithubLoginButton
} from "react-social-login-buttons";
import { Row, Col, Card, CardBody } from "reactstrap";
import { connect } from "react-redux";

// custom imports
import { UserLogin } from "action/AccountAction";

interface Props {
  UserLogin: any;
  isAuthenticated: boolean;
  history: any;
}

class ViewsHomeLogin extends React.Component<Props> {
  handleLogin(): void {
    this.props.UserLogin();
  }

  render(): React.ReactElement {
    return (
      <Row>
        <Col sm="12" md={{ size: 4, offset: 4 }}>
          <Card>
            <CardBody>
              <FacebookLoginButton onClick={(): void => this.handleLogin()} />
              <GoogleLoginButton onClick={(): void => this.handleLogin()} />
              <GithubLoginButton onClick={(): void => this.handleLogin()} />
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }
}

const mapDispatchToProps = (dispatch: any): any => {
  return {
    UserLogin: (): any => {
      dispatch(UserLogin());
    }
  };
};

const mapStateToProps = (state: any): any => ({
  user: state.account.user,
  isAuthenticated: state.account.isAuthenticated
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewsHomeLogin);
