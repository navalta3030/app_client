import * as React from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import thunk, { ThunkMiddleware } from "redux-thunk";
import { AccountReducer } from "reducers/Reducers";

// custom imports
import AuthenticatedSwitch from "utils/AuthenticationSwitch";
import history from "utils/History";
import { AccountActionTypes } from "interface/action/AccountActionInterface";

const store = createStore(
  combineReducers({
    account: AccountReducer
  }),
  applyMiddleware(thunk as ThunkMiddleware<AccountActionTypes>) // ajax handling
);

class App extends React.Component {
  render(): React.ReactElement {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <Route path="/" component={AuthenticatedSwitch} />
            <Redirect to="/" />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
