import { AlertStateInterface } from "_interface/State/AlertStateInterface";
import { UserAlert } from "action/AlertAction";

const AlertInitialState: AlertStateInterface = {
  message: "asd",
  isOpen: false,
  UserAlert: UserAlert
};

export default AlertInitialState;
