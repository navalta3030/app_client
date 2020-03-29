import {
  LOGIN,
  LOGOUT,
  AccountActionTypes
} from "_interface/action/Account/AccountActionInterface";
import { AccountStateInterface } from "_interface/reducer/ReducerStateInterface";
import AccountInitialState from "./InitialState/AccountInitialState";

export const AccountReducer = (
  state = AccountInitialState,
  action: AccountActionTypes
): AccountStateInterface => {
  switch (action.type) {
    case LOGIN:
      return Object.assign({}, state, {
        ...state,
        user: {
          name: action.payload.name,
          data: action.payload.data
        },
        isAuthenticated: action.payload.isAuthenticated
      });
    case LOGOUT:
      return Object.assign({}, state, {
        ...state,
        user: {
          name: "",
          data: []
        },
        isAuthenticated: action.payload.isAuthenticated
      });
    default:
      return state;
  }
};
