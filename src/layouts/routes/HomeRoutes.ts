import HomeIndex from "layouts/views/home/ViewsHomeIndex";
import HomeCovid from "layouts/views/home/ViewsHomeCovid";
import HomeAbout from "layouts/views/home/ViewsHomeAbout";
// import HighChart from "layouts/views/home/ViewsHomeHighCharts";

// import interface
import RoutesInterface from "_interface/RoutesInterface";

const routes: RoutesInterface[] = [
  {
    path: "/",
    name: "Home",
    view: HomeIndex
  },
  {
    path: "/covid",
    name: "Covid-19",
    view: HomeCovid
  },
  {
    path: "/about",
    name: "About",
    view: HomeAbout
  }
  // {
  //   path: "/highchart",
  //   name: "HighChart",
  //   view: HighChart
  // }
];

export default routes;
