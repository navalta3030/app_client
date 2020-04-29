import React from "react";
import ReactDom from "react-dom";
import BarChartComponent from "component/Charts/BarChartComponent";
import BarChartInitialState from "reducers/InitialState/BarChartInitialState";

it("renders barchart component without crashing", () => {
  const div = document.createElement("div");

  ReactDom.render(<BarChartComponent {...BarChartInitialState} />, div);
});
