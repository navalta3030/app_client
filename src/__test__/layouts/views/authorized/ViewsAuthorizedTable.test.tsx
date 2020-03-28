import React from "react";
import ReactDom from "react-dom";
import ViewsAuthenticatedTable from "layouts/views/authenticated/ViewsAuthenticatedTable";

it("renders views without crashing", () => {
  const div = document.createElement("div");
  ReactDom.render(<ViewsAuthenticatedTable />, div);
});
