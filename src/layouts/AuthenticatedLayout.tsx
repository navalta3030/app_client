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
import AuthenticatedLayoutInterface from "_interface/layouts/AuthenticatedLayoutInterface";
import AlertComponent from "component/helpers/AlertComponent";
import AlertInitialState from "reducers/InitialState/AlertInitialState";
import { UserAlert } from "action/AlertAction";

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
          <NavLink tag={Link} to={prop.path}>
            {prop.name}
          </NavLink>
        </NavItem>
      );
    });
  };

  render(): React.ReactElement {
    return (
      <>
        <div className="layout_authenticated">
          <Navbar color="light" light expand="md">
            <NavbarBrand tag={Link} to="/">
              XR-S
            </NavbarBrand>

            <Nav className="mr-auto" navbar>
              {this.getNavLinks(routes)}
            </Nav>

            <Nav
              tag={Link}
              to={"/"}
              onClick={(): any => this.props.UserLogOut()}
            >
              Log Out
            </Nav>
          </Navbar>
        </div>

        <AlertComponent
          {...AlertInitialState}
          UserAlert={UserAlert}
        ></AlertComponent>

        <div className="main-content">
          <Container>
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
