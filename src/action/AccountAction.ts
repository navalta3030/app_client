// import axios from "axios";
import {
  LOGIN,
  LOGOUT,
  VALIDATEAUTHENTICATION,
  AccountActionTypes
} from "interface/action/AccountActionInterface";
import {
  PayLoadLoginInterface,
  PayLoadLogOutInterface,
  PayLoadValidateAuthenticationInterface
} from "interface/action/AccountActionPayloadInterface";

// custom imports
import History from "utils/History";
import { validateToken } from "../utils/validateToken";
import { setJWT, deleteJWT, getJWT } from "utils/JwtHandler";

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

/*
 * LOGIN
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

/*
 * LOGOUT
 */
export const UserLogOut = () => (dispatch: any): any => {
  deleteJWT();
  dispatch(LogOut({ isAuthenticated: false }));

  History.push("/");
};

/*
 * VALIDATEAUTHENTICATION
 */
export const UserValidateAuthentication = () => (dispatch: any): any => {
  if (validateToken(getJWT())) {
    dispatch(LogOut({ isAuthenticated: true }));
  } else {
    dispatch(LogOut({ isAuthenticated: false }));
  }

  History.push("/");
};
