import HomeIndex from "layouts/views/home/ViewsHomeIndex";
import HighChart from "layouts/views/home/ViewsHomeHighCharts";
import Login from "layouts/views/home/ViewsHomeLogin";

// import interface
import RoutesInterface from "_interface/RoutesInterface";

const routes: RoutesInterface[] = [
  {
    path: "/",
    name: "Home",
    view: HomeIndex
  },
  {
    path: "/highchart",
    name: "HighChart",
    view: HighChart
  },
  {
    path: "/login",
    name: "",
    view: Login
  }
];

export default routes;
