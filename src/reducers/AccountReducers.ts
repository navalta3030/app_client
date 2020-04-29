import {
  LOGIN,
  LOGOUT,
  AccountActionTypes
} from "_interface/ActionReducer/Account/AccountActionTypesInterface";
import AccountInitialState from "./InitialState/AccountInitialState";
import { AccountStateInterface } from "_interface/State/AccountStateInterface";

const AccountReducer = (
  state = AccountInitialState,
  action: AccountActionTypes
): AccountStateInterface => {
  switch (action.type) {
    case LOGIN:
      return Object.assign({}, state, {
        ...state,
        name: action.payload.name,
        data: action.payload.data,
        email: action.payload.email,
        isAuthenticated: action.payload.isAuthenticated
      });
    case LOGOUT:
      return Object.assign({}, state, {
        ...state,
        name: "",
        email: "",
        data: [],
        isAuthenticated: action.payload.isAuthenticated
      });
    default:
      return state;
  }
};

export default AccountReducer;
