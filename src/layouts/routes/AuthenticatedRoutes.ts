import ViewsAuthenticatedIndex from "layouts/views/authenticated/ViewsAuthenticatedHome";
import ViewsAuthenticatedTable from "layouts/views/authenticated/ViewsAuthenticatedTable";

// import interface
import RoutesInterface from "_interface/RoutesInterface";
import ViewsAuthenticatedImageUpload from "layouts/views/authenticated/ViewsAuthenticatedImageUpload";

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
  },
  {
    path: "/upload",
    name: "upload",
    view: ViewsAuthenticatedImageUpload
  }
];

export default routes;
