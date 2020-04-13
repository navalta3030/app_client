import { UserLogin } from "action/AccountAction";

export default interface HomeLoginComponentInterface {
  UserLogin: typeof UserLogin;
  name: string;
  email: string;
  data: any;
  isAuthenticated: boolean;
}
