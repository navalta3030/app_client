import { setJWT } from "_utils/JwtHandler";
import History from "_utils/History";
import { Login } from "action/AccountAction";
/**
 * Dummy login action to be performed when under development
 */
const LogInDev = (dispatch: any): void => {
  setJWT("Dummy");
  dispatch(
    Login({
      name: "dev",
      email: "dev",
      data: "test_data",
      isAuthenticated: true
    })
  );
  History.push("/");
};

export default LogInDev;
