import { PayLoadAccountInterface } from "_interface/action_reducer/Account/AccountActionPayloadInterface";

const AccountInitialState: PayLoadAccountInterface = {
  name: "",
  email: "",
  data: null,
  isAuthenticated: false
};

export default AccountInitialState;
