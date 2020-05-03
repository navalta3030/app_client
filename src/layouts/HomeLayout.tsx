/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
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
import routes from "layouts/routes/HomeRoutes";
import routeInterface from "_interface/RoutesInterface";
import AlertComponent from "component/Alert/AlertComponent";
import AlertInitialState from "reducers/InitialState/AlertInitialState";
import HomeLoginComponent from "component/Login/HomeLoginComponent";
import AccountInitialState from "reducers/InitialState/AccountInitialState";

class HomeLayout extends React.Component {
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
    return (
      <>
        <div className="layout_home">
          <Navbar color="dark" light expand="md">
            <NavbarBrand className="text-white" tag={Link} to="/">
              XR-S Beta!
            </NavbarBrand>

            <Nav className="mr-auto" navbar>
              {this.getNavLinks(routes)}
            </Nav>

            <NavLink tag={Link} to="/">
              <HomeLoginComponent {...AccountInitialState} />
            </NavLink>
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

export default HomeLayout;
