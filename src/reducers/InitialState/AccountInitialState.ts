import { AccountStateInterface } from "_interface/reducer/ReducerStateInterface";

const AccountInitialState: AccountStateInterface = {
  user: {
    name: "",
    data: []
  },
  isAuthenticated: false
};

export default AccountInitialState;
