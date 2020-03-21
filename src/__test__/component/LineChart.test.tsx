import React from "react";
import ReactDom from "react-dom";
import LineChart from "component/LineChart";
import Data from "./ChartVar";

it("renders linechart component without crashing", () => {
  const div = document.createElement("div");

  ReactDom.render(<LineChart data={Data.LineChartData} />, div);
});
