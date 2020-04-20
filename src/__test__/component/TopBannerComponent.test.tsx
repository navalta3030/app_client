import React from "react";
import ReactDom from "react-dom";
import TopBanner from "component/Banner/TopBannerComponent";
import BannerInitialState from "reducers/InitialState/BannerInitialState";

it("renders linechart component without crashing", () => {
  const div = document.createElement("div");

  ReactDom.render(<TopBanner {...BannerInitialState} />, div);
});
