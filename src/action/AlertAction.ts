import { AlertPayloadInterface } from "_interface/ActionReducer/Alert/AlertPayloadInterface";
import {
  AlertActionTypes,
  ALERT
} from "_interface/ActionReducer/Alert/AlertActionTypesInterface";

export const Alert = (payload: AlertPayloadInterface): AlertActionTypes => ({
  type: ALERT,
  payload: payload
});

/**
 * User @UserAlert
 * - Can be aimed for any message we want to deliver to the customer
 */
export const UserAlert = (message: string, toggle = true) => (
  dispatch: any
): any => {
  dispatch(Alert({ message, isOpen: toggle }));
};
