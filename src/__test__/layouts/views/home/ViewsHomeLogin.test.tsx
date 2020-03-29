import React from "react";
import ReactDom from "react-dom";
import Login from "layouts/views/home/ViewsHomeLogin";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import { AccountReducer } from "reducers/AccountReducers";

it("Should render login", () => {
  const div = document.createElement("div");
  const props = {
    dispatch: jest.fn(),
    UserLogin: true,
    isAuthenticated: false,
    history: null
  };

  const store = createStore(
    combineReducers({
      account: AccountReducer
    })
  );

  ReactDom.render(
    <Provider store={store}>
      <Login {...props} />
    </Provider>,
    div
  );
});
