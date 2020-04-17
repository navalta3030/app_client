import React from "react";
import ReactDom from "react-dom";
import HomeLayout from "layouts/HomeLayout";
import { BrowserRouter } from "react-router-dom";
import { createStore } from "redux";
import { rootReducer } from "ReduxStore";
import { Provider } from "react-redux";

it("renders linechart component without crashing", () => {
  const div = document.createElement("div");
  const props = {
    dispatch: jest.fn()
  };

  const store = createStore(rootReducer);

  ReactDom.render(
    <Provider store={store}>
      <BrowserRouter>
        <HomeLayout {...props} />
      </BrowserRouter>
    </Provider>,
    div
  );
});
