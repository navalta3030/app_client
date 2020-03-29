import React from "react";
import ReactDom from "react-dom";
import ViewsAuthenticatedImageUpload from "layouts/views/authenticated/ViewsAuthenticatedImageUpload";

it("renders views without crashing", () => {
  const div = document.createElement("div");
  ReactDom.render(<ViewsAuthenticatedImageUpload />, div);
});
