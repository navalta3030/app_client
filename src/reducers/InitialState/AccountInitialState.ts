import { AccountStateInterface } from "_interface/State/AccountStateInterface";
import { UserLogin } from "action/AccountAction";
import { UserAlert } from "action/AlertAction";

const AccountInitialState: AccountStateInterface = {
  name: "",
  email: "",
  data: null,
  isAuthenticated: false,
  UserLogin: UserLogin,
  UserAlert: UserAlert
};

export default AccountInitialState;
