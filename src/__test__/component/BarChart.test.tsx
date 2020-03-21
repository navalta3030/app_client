import React from "react";
import ReactDom from "react-dom";
import BarChart from "component/BarChart";
import Data from "./ChartVar";

it("renders barchart component without crashing", () => {
  const div = document.createElement("div");

  ReactDom.render(<BarChart data={Data.BarChartData} />, div);
});
