import React from "react";
import ReactDom from "react-dom";
import ViewsAuthenticatedHome from "layouts/views/authenticated/ViewsAuthenticatedHome";

it("renders views without crashing", () => {
  const div = document.createElement("div");
  ReactDom.render(<ViewsAuthenticatedHome />, div);
});
