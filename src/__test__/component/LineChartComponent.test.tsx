import React from "react";
import ReactDom from "react-dom";
import LineChartComponent from "component/LineChartComponent";
import Data from "./variables/ChartVar";

it("renders linechart component without crashing", () => {
  const div = document.createElement("div");

  ReactDom.render(<LineChartComponent {...Data.LineChartData} />, div);
});
