import { AlertStateInterface } from "_interface/action_reducer/Alert/AlertStateInterface";
import {
  AlertActionInterface,
  ALERT
} from "_interface/action_reducer/Alert/AlertActionTypesInterface";

export const Alert = (payload: AlertStateInterface): AlertActionInterface => ({
  type: ALERT,
  payload: payload
});

export const UserAlertManualDispatch = (
  message: string,
  isOpen = true
): AlertActionInterface => {
  return {
    type: ALERT,
    payload: { message, isOpen }
  };
};

/**
 * User @UserAlert
 * - Can be aimed for any message we want to deliver to the customer
 */
export const UserAlert = (message: string, toggle = true) => (
  dispatch: any
): any => {
  dispatch(Alert({ message, isOpen: toggle }));
};
