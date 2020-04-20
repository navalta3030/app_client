import { AlertPayloadInterface } from "./AlertPayloadInterface";

export const ALERT = "ALERT";

export interface AlertActionInterface {
  type: typeof ALERT;
  payload: AlertPayloadInterface;
}

export type AlertActionTypes = AlertActionInterface;
