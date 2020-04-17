import { UserAlert } from "action/AlertAction";

export default interface AlertComponentInterface {
  message: string;
  isOpen: boolean;
  UserAlert: typeof UserAlert;
}
