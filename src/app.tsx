import * as React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import { Reducer } from "reducers/Reducers";
import HomeLayout from "layout/HomeLayout";

const store = createStore(
  combineReducers({
    app: Reducer
  }),
  applyMiddleware(thunk) // ajax handling
);

class App extends React.Component {
  render(): React.ReactElement {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route path="/home" render={HomeLayout} />
            <Redirect from="/" to="/home/index" />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
