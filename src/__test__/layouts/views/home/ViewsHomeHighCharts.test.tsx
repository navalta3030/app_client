import React from "react";
import ReactDom from "react-dom";
import HighChart from "layouts/views/home/ViewsHomeHighCharts";

it("renders views without crashing", () => {
  const div = document.createElement("div");
  ReactDom.render(<HighChart />, div);
});
