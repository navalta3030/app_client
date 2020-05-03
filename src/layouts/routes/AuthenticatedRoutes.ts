// import ViewsAuthenticatedIndex from "layouts/views/authenticated/ViewsAuthenticatedHome";

// import interface
import RoutesInterface from "_interface/RoutesInterface";
import ViewsAuthenticatedImageUpload from "layouts/views/authenticated/ViewsAuthenticatedImageUpload";
import ViewsAuthenticatedCovid from "layouts/views/authenticated/ViewsAuthenticatedCovid";
import ViewsAuthenticatedAbout from "layouts/views/authenticated/ViewsAuthenticatedAbout";

const routes: RoutesInterface[] = [
  // {
  //   path: "/",
  //   name: "Home",
  //   view: ViewsAuthenticatedIndex
  // },
  {
    path: "/upload",
    name: "upload",
    view: ViewsAuthenticatedImageUpload
  },
  {
    path: "/covid",
    name: "Covid-19",
    view: ViewsAuthenticatedCovid
  },
  {
    path: "/about",
    name: "About",
    view: ViewsAuthenticatedAbout
  }
];

export default routes;
