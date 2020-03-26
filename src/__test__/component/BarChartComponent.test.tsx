import React from "react";
import ReactDom from "react-dom";
import BarChartComponent from "component/BarChartComponent";
import Data from "./variables/ChartVar";

it("renders barchart component without crashing", () => {
  const div = document.createElement("div");

  ReactDom.render(<BarChartComponent data={Data.BarChartData} />, div);
});
