import HomeIndex from "views/home/vh_index"
import Test from "views/home/vh_test"
let routes = [
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
  }
];

export default routes;