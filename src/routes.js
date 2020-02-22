import HomeIndex from "views/home/vh_index.js"
import Test from "views/home/vh_test.js"
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