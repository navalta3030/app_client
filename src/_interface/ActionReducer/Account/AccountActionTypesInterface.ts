import {
  AccountPayloadInterface,
  AuthenticationPayloadInterface
} from "./AccountPayloadInterface";

export const LOGOUT = "LOGOUT";
export const LOGIN = "LOGIN";
export const VALIDATEAUTHENTICATION = "VALIDATEAUTHENTICATION";

export interface LoginActionInterface {
  type: typeof LOGIN;
  payload: AccountPayloadInterface;
}

export interface LogOutActionInterface {
  type: typeof LOGOUT;
  payload: AuthenticationPayloadInterface;
}

export interface ValidateAuthenticationActionInterface {
  type: typeof VALIDATEAUTHENTICATION;
  payload: AuthenticationPayloadInterface;
}

export type AccountActionTypes =
  | LoginActionInterface
  | LogOutActionInterface
  | ValidateAuthenticationActionInterface;
