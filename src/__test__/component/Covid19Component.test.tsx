import React from "react";
import ReactDom from "react-dom";
import CovidAnalyzationComponent from "component/Covid19/CovidAnalyzationComponent";

it("renders barchart component without crashing", () => {
  const div = document.createElement("div");

  ReactDom.render(<CovidAnalyzationComponent />, div);
});
