import * as React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk, { ThunkMiddleware } from "redux-thunk";

// custom imports
import AuthenticatedSwitch from "_utils/AuthenticationSwitch";
import history from "_utils/History";
import { AccountActionTypes } from "_interface/ActionReducer/Account/AccountActionTypesInterface";
import { rootReducer } from "ReduxStore";
import { ImageUploadActionTypes } from "_interface/ActionReducer/ImageUpload/ImageUploadActionTypesInterface";
import { AlertActionTypes } from "_interface/ActionReducer/Alert/AlertActionTypesInterface";

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunk as ThunkMiddleware<
      AccountActionTypes | ImageUploadActionTypes | AlertActionTypes
    >
  ) // ajax handling
);

class App extends React.Component {
  render(): React.ReactElement {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <Route path="/" component={AuthenticatedSwitch} />
            <Route component={AuthenticatedSwitch} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export { App };
