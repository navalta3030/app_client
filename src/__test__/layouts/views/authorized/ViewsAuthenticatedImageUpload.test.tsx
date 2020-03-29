import React from "react";
import ReactDom from "react-dom";
import ViewsAuthenticatedImageUpload from "layouts/views/authenticated/ViewsAuthenticatedImageUpload";
import { createStore } from "redux";
import { rootReducer } from "ReduxStore";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

it("renders views without crashing", () => {
  const div = document.createElement("div");

  const store = createStore(rootReducer);

  ReactDom.render(
    <Provider store={store}>
      <BrowserRouter>
        <ViewsAuthenticatedImageUpload />
      </BrowserRouter>
    </Provider>,
    div
  );
});
