// import axios from "axios";
import {
  LOGIN,
  LOGOUT,
  VALIDATEAUTHENTICATION,
  AccountActionTypes
} from "_interface/action_reducer/Account/AccountActionTypesInterface";
import {
  AccountStateInterface,
  AuthenticationStateInterface,
  LoginApiResponseStateInterface
} from "_interface/action_reducer/Account/AccountStateInterface";

// custom imports
import History from "_utils/History";
import { validateToken } from "../_utils/validateToken";
import { setJWT, deleteJWT, getJWT } from "_utils/JwtHandler";
import { callApiPost } from "_utils/CallApi";
import { UserAlert } from "./AlertAction";

export const Login = (payload: AccountStateInterface): AccountActionTypes => ({
  type: LOGIN,
  payload: payload
});

export const LogOut = (
  payload: AuthenticationStateInterface
): AccountActionTypes => ({
  type: LOGOUT,
  payload: payload
});

export const ValidateAuthentication = (
  payload: AuthenticationStateInterface
): AccountActionTypes => ({
  type: VALIDATEAUTHENTICATION,
  payload: payload
});

/**
 * User @Login - using oAuth2
 * Google Authentication - {@link https://www.npmjs.com/package/react-google-login}
 * Facebook Authentication - {@link TODO}
 *
 * @param responseFromGoogle - After user sign in using google oAuth, google will pass the info through this function parameter variable
 */
export const UserLogin = (responseFromGoogle: any) => (dispatch: any): any => {
  const Name: string = responseFromGoogle.profileObj.name;
  const Email: string = responseFromGoogle.profileObj.email;

  // pass the user information from google to server to obtain jwt token
  const loginApiEresponse: Promise<LoginApiResponseStateInterface> = callApiPost(
    "/token",
    { Name, Email },
    false
  );

  loginApiEresponse
    .then(res => {
      if (res.access_token != null) {
        setJWT(res.access_token);

        dispatch(
          Login({
            name: Name,
            email: Email,
            data: "test_data",
            isAuthenticated: true
          })
        );

        History.push("/");
      }
    })
    .catch(err => {
      UserAlert(err);
    });
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
