import { AccountPayloadInterface } from "_interface/ActionReducer/Account/AccountPayloadInterface";
import { UserLogin } from "action/AccountAction";
import { UserAlert } from "action/AlertAction";

export interface AccountStateInterface extends AccountPayloadInterface {
  UserLogin: typeof UserLogin;
  UserAlert: typeof UserAlert;
}
