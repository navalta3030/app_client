import { AlertPayloadInterface } from "_interface/ActionReducer/Alert/AlertPayloadInterface";
import { UserAlert } from "action/AlertAction";

export interface AlertStateInterface extends AlertPayloadInterface {
  UserAlert: typeof UserAlert;
}
