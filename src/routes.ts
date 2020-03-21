import HomeIndex from "views/home/vh_index";
import Test from "views/home/vh_test";
import HighChart from "views/home/vh_highchart";

// import interface
import routesInterface from "interface/routes";

const routes: routesInterface[] = [
  {
    layout: "/home",
    path: "/index",
    name: "Home",
    view: HomeIndex
  },
  {
    layout: "/home",
    path: "/test",
    name: "Test",
    view: Test
  },
  {
    layout: "/home",
    path: "/highchart",
    name: "HighChart",
    view: HighChart
  }
];

export default routes;
