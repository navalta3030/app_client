import { UserLogOut } from "action/AccountAction";

export default interface AuthenticatedLayoutInterface {
  UserLogOut: typeof UserLogOut;
}
