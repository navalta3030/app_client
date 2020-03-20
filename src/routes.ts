import HomeIndex from "views/home/ViewsHomeIndex";
import Test from "views/home/ViewsHomeTest";
import HighChart from "views/home/ViewsHomeHighCharts";

// import interface
import RoutesInterface from "interface/RoutesInterface";

const routes: RoutesInterface[] = [
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
