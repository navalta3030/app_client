/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
import { connect } from "react-redux";
import { Route, Switch, Link } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from "reactstrap";

// custom imports
import routeInterface from "_interface/RoutesInterface";
import { UserLogOut } from "action/AccountAction";
import routes from "layouts/routes/AuthenticatedRoutes";
import AuthenticatedLayoutInterface from "_interface/Layout/AuthenticatedLayoutInterface";
import AlertComponent from "component/Alert/AlertComponent";
import AlertInitialState from "reducers/InitialState/AlertInitialState";
import { GoogleLogout } from "react-google-login";
import { GOOGLE_CLIENT_ID } from "_utils/ConstantVariables";
import History from "_utils/History";

class AuthenticatedLayout extends React.Component<
  AuthenticatedLayoutInterface
> {
  getRoutes = (routes: routeInterface[]): any => {
    return routes.map((prop, key) => {
      return <Route exact path={prop.path} component={prop.view} key={key} />;
    });
  };

  getNavLinks = (routes: routeInterface[]): any => {
    return routes.map((prop, key) => {
      return (
        <NavItem key={key}>
          <NavLink className="text-white" tag={Link} to={prop.path}>
            {prop.name}
          </NavLink>
        </NavItem>
      );
    });
  };

  render(): React.ReactElement {
    const UserLogout = this.props.UserLogOut;
    History.push("/upload"); // Push to upload right away
    return (
      <>
        <div className="layout_authenticated">
          <Navbar color="dark" light expand="md">
            <NavbarBrand className="text-white" tag={Link} to="/upload">
              XR-S Beta!
            </NavbarBrand>

            <Nav className="mr-auto" navbar>
              {this.getNavLinks(routes)}
            </Nav>

            <Nav tag={Link} to={"/"}>
              <GoogleLogout
                clientId={GOOGLE_CLIENT_ID}
                buttonText="Logout"
                onLogoutSuccess={UserLogout}
              ></GoogleLogout>
            </Nav>
          </Navbar>
        </div>

        <AlertComponent {...AlertInitialState}></AlertComponent>

        <div className="main-content">
          <Container className="h-100">
            <Switch>{this.getRoutes(routes)}</Switch>
          </Container>
        </div>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch: any): any => {
  return {
    UserLogOut: (): any => {
      dispatch(UserLogOut());
    }
  };
};

export default connect(null, mapDispatchToProps)(AuthenticatedLayout);
