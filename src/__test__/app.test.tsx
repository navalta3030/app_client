import React from "react";
import ReactDom from "react-dom";
import App from "app";

it("renders whole app without crashing", () => {
  const div = document.createElement("div");
  ReactDom.render(<App />, div);
});
