import React from "react";
import ReactDom from "react-dom";
import HomeLayout from "layouts/HomeLayout";
import { Route } from "react-router";
import { BrowserRouter } from "react-router-dom";

it("renders linechart component without crashing", () => {
  const div = document.createElement("div");

  ReactDom.render(
    <BrowserRouter>
      <Route path="/" component={HomeLayout} />
    </BrowserRouter>,
    div
  );
});
