import {
  PayLoadLoginInterface,
  PayLoadLogOutInterface,
  PayLoadValidateAuthenticationInterface
} from "./AccountActionPayloadInterface";

export const LOGOUT = "LOGOUT";
export const LOGIN = "LOGIN";
export const VALIDATEAUTHENTICATION = "VALIDATEAUTHENTICATION";

export interface AccountLoginInterface {
  type: typeof LOGIN;
  payload: PayLoadLoginInterface;
}

export interface AccountLogOutInterface {
  type: typeof LOGOUT;
  payload: PayLoadLogOutInterface;
}

export interface AccountValidateAuthenticationInterface {
  type: typeof VALIDATEAUTHENTICATION;
  payload: PayLoadValidateAuthenticationInterface;
}

export type AccountActionTypes =
  | AccountLoginInterface
  | AccountLogOutInterface
  | AccountValidateAuthenticationInterface;
