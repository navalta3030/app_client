import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import { Reducer } from "reducers/reducer";
import HomeLayout from "layout/home_layout";

import "bootstrap/dist/css/bootstrap.min.css";
import "assets/scss/index.scss";

const store = createStore(
  combineReducers({
    app: Reducer
  }),
  applyMiddleware(thunk) // ajax handling
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/home" render={props => <HomeLayout {...props} />} />
        <Redirect from="/" to="/home/index" />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root") as HTMLElement
);
