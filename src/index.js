import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import { Reducer } from "./reducers";
import HomeLayout from 'layout/home_layout.js';

import * as serviceWorker from 'serviceWorker.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'assets/scss/index.scss'

const store = createStore(
  combineReducers({
      app: Reducer
  }),
  applyMiddleware(thunk) // ajax handling
);

ReactDOM.render(
  <Provider store={Provider}>
    <BrowserRouter>
      <Switch>
        <Route path="/home" render={props => <HomeLayout {...props} />} />

        <Redirect from="/" to="/home" />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();