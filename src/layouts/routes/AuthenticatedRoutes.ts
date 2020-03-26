import HomeIndex from "layouts/views/authenticated/ViewsAuthenticatedHome";

// import interface
import RoutesInterface from "interface/RoutesInterface";

const routes: RoutesInterface[] = [
  {
    path: "/",
    name: "Home",
    view: HomeIndex
  }
];

export default routes;
