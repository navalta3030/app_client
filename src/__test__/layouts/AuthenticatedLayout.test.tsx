import React from "react";
import ReactDom from "react-dom";
import AuthenticatedLayout from "layouts/AuthenticatedLayout";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { UserLogOut } from "action/AccountAction";
import { rootReducer } from "ReduxStore";

it("renders linechart component without crashing", () => {
  const div = document.createElement("div");
  const props = {
    dispatch: jest.fn(),
    UserLogOut: UserLogOut
  };

  const store = createStore(rootReducer);

  ReactDom.render(
    <Provider store={store}>
      <BrowserRouter>
        <AuthenticatedLayout {...props} />
      </BrowserRouter>
    </Provider>,
    div
  );
});
