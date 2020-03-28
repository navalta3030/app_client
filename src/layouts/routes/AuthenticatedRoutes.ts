import ViewsAuthenticatedIndex from "layouts/views/authenticated/ViewsAuthenticatedHome";
import ViewsAuthenticatedTable from "layouts/views/authenticated/ViewsAuthenticatedTable";

// import interface
import RoutesInterface from "interface/RoutesInterface";

const routes: RoutesInterface[] = [
  {
    path: "/",
    name: "Home",
    view: ViewsAuthenticatedIndex
  },
  {
    path: "/table",
    name: "records",
    view: ViewsAuthenticatedTable
  }
];

export default routes;
