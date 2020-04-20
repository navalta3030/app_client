import React from "react";
import ReactDom from "react-dom";
import LineChartComponent from "component/Charts/LineChartComponent";
import LineChartInitialState from "reducers/InitialState/LineChartInitialState";

it("renders linechart component without crashing", () => {
  const div = document.createElement("div");

  ReactDom.render(<LineChartComponent {...LineChartInitialState} />, div);
});
