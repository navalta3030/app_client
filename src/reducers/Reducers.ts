import InitialStateInterface from "interface/reducer/ReducerInterface";
import { LOGIN, LOGOUT } from "interface/action/AccountActionInterface";

const initialState: InitialStateInterface = {
  user: {
    name: "",
    data: []
  },
  isAuthenticated: false
};

export const AccountReducer = (
  state = initialState,
  action: any
): InitialStateInterface => {
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
