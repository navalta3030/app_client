// import axios from "axios";
import {
  LOGIN,
  LOGOUT,
  VALIDATEAUTHENTICATION,
  AccountActionTypes
} from "_interface/action/Account/AccountActionInterface";
import {
  PayLoadLoginInterface,
  PayLoadLogOutInterface,
  PayLoadValidateAuthenticationInterface
} from "_interface/action/Account/AccountActionPayloadInterface";

// custom imports
import History from "_utils/History";
import { validateToken } from "../_utils/validateToken";
import { setJWT, deleteJWT, getJWT } from "_utils/JwtHandler";

export const Login = (payload: PayLoadLoginInterface): AccountActionTypes => ({
  type: LOGIN,
  payload: payload
});
export const LogOut = (
  payload: PayLoadLogOutInterface
): AccountActionTypes => ({
  type: LOGOUT,
  payload: payload
});
export const ValidateAuthentication = (
  payload: PayLoadValidateAuthenticationInterface
): AccountActionTypes => ({
  type: VALIDATEAUTHENTICATION,
  payload: payload
});

/**
 * User @Login
 */
export const UserLogin = () => (dispatch: any): any => {
  // disable api call temporarily
  // axios.get("/login").then(res => {dispatch(UserLogin(res.data));});
  setJWT("temp_jwt");
  dispatch(
    Login({
      name: "Mark navalta",
      data: "test_data",
      isAuthenticated: true
    })
  );

  History.push("/");
};

/**
 * User @Logout
 */
export const UserLogOut = () => (dispatch: any): any => {
  // delete localStorage jwt
  deleteJWT();
  dispatch(LogOut({ isAuthenticated: false }));

  History.push("/");
};

/**
 * User @ValidateAuthentication
 */
export const UserValidateAuthentication = () => (dispatch: any): any => {
  // verify if user has a valid jwt token through the server
  if (validateToken(getJWT())) {
    dispatch(LogOut({ isAuthenticated: true }));
  } else {
    dispatch(LogOut({ isAuthenticated: false }));
  }

  History.push("/");
};
