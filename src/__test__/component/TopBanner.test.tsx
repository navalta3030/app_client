import React from "react";
import ReactDom from "react-dom";
import TopBanner from "component/TopBanner";

it("renders linechart component without crashing", () => {
  const div = document.createElement("div");

  ReactDom.render(<TopBanner title="test" />, div);
});
