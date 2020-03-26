import React from "react";
import ReactDom from "react-dom";
import AuthenticatedLayout from "layouts/AuthenticatedLayout";
import { createStore, combineReducers } from "redux";
import { AccountReducer } from "reducers/Reducers";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

it("renders linechart component without crashing", () => {
  const div = document.createElement("div");
  const props = {
    dispatch: jest.fn(),
    UserLogOut: null
  };

  const store = createStore(
    combineReducers({
      account: AccountReducer
    })
  );

  ReactDom.render(
    <Provider store={store}>
      <BrowserRouter>
        <AuthenticatedLayout {...props} />
      </BrowserRouter>
    </Provider>,
    div
  );
});
