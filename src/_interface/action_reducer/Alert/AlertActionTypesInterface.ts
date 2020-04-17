import { AlertStateInterface } from "./AlertStateInterface";

export const ALERT = "ALERT";

export interface AlertActionInterface {
  type: typeof ALERT;
  payload: AlertStateInterface;
}

export type AlertActionTypes = AlertActionInterface;
