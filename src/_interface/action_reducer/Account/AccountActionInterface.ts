import {
  PayLoadAccountInterface,
  PayloadAuthenticationInterface
} from "./AccountActionPayloadInterface";

export const LOGOUT = "LOGOUT";
export const LOGIN = "LOGIN";
export const VALIDATEAUTHENTICATION = "VALIDATEAUTHENTICATION";

export interface AccountLoginInterface {
  type: typeof LOGIN;
  payload: PayLoadAccountInterface;
}

export interface AccountLogOutInterface {
  type: typeof LOGOUT;
  payload: PayloadAuthenticationInterface;
}

export interface AccountValidateAuthenticationInterface {
  type: typeof VALIDATEAUTHENTICATION;
  payload: PayloadAuthenticationInterface;
}

export type AccountActionTypes =
  | AccountLoginInterface
  | AccountLogOutInterface
  | AccountValidateAuthenticationInterface;
