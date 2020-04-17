import {
  AccountStateInterface,
  AuthenticationStateInterface
} from "./AccountStateInterface";

export const LOGOUT = "LOGOUT";
export const LOGIN = "LOGIN";
export const VALIDATEAUTHENTICATION = "VALIDATEAUTHENTICATION";

export interface LoginActionInterface {
  type: typeof LOGIN;
  payload: AccountStateInterface;
}

export interface LogOutActionInterface {
  type: typeof LOGOUT;
  payload: AuthenticationStateInterface;
}

export interface ValidateAuthenticationActionInterface {
  type: typeof VALIDATEAUTHENTICATION;
  payload: AuthenticationStateInterface;
}

export type AccountActionTypes =
  | LoginActionInterface
  | LogOutActionInterface
  | ValidateAuthenticationActionInterface;
