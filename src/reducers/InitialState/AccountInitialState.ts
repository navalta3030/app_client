import { AccountStateInterface } from "_interface/action_reducer/Account/AccountStateInterface";

const AccountInitialState: AccountStateInterface = {
  name: "",
  email: "",
  data: null,
  isAuthenticated: false
};

export default AccountInitialState;
