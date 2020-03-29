import React from "react";
import ReactDom from "react-dom";
import ImageUploadComponent from "component/ImageUploadComponent";

it("renders linechart component without crashing", () => {
  const div = document.createElement("div");

  ReactDom.render(<ImageUploadComponent />, div);
});
