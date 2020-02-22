import HomeIndex from "views/home/vh_index.js"
import Test from "views/home/vh_test.js"
let routes = [
  {
    path: "/index",
    name: "Home",
    view: HomeIndex,
    layout: "/home"
  },
  {
    path: "/test",
    name: "Test",
    view: Test,
    layout: "/home"
  }
];

export default routes;