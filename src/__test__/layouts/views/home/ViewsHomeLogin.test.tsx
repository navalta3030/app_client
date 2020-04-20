import React from "react";
import ReactDom from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

// custom import
import Login from "layouts/views/home/ViewsHomeLogin";
import { rootReducer } from "ReduxStore";

it("Should render login", () => {
  const div = document.createElement("div");

  const store = createStore(rootReducer);

  ReactDom.render(
    <Provider store={store}>
      <Login />
    </Provider>,
    div
  );
});
