import AlertInitialState from "./InitialState/AlertInitialState";
import {
  AlertActionTypes,
  ALERT
} from "_interface/action_reducer/Alert/AlertActionTypesInterface";
import { AlertStateInterface } from "_interface/action_reducer/Alert/AlertStateInterface";

export const AlertReducer = (
  state = AlertInitialState,
  action: AlertActionTypes
): AlertStateInterface => {
  switch (action.type) {
    case ALERT:
      return Object.assign({}, state, {
        ...state,
        message: action.payload.message,
        isOpen: action.payload.isOpen
      });
    default:
      return state;
  }
};
