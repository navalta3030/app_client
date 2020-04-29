import ViewsAuthenticatedIndex from "layouts/views/authenticated/ViewsAuthenticatedHome";
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
    path: "/upload",
    name: "upload",
    view: ViewsAuthenticatedImageUpload
  }
];

export default routes;
