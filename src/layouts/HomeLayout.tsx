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
import routeInterface from "interface/RoutesInterface";

const LOGIN_LINK = "/login";

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
        <div className="layout_home">
          <Navbar color="light" light expand="md">
            <NavbarBrand tag={Link} to="/">
              XR-S
            </NavbarBrand>

            <Nav className="mr-auto" navbar>
              {this.getNavLinks(routes)}
            </Nav>

            <NavLink tag={Link} to={LOGIN_LINK}>
              Log In
            </NavLink>
          </Navbar>
        </div>

        <div className="main-content">
          <Container>
            <Switch>{this.getRoutes(routes)}</Switch>
          </Container>
        </div>
      </>
    );
  }
}

export default HomeLayout;
