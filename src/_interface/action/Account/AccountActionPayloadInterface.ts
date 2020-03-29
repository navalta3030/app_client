export interface PayLoadLoginInterface {
  name: string;
  data: any;
  isAuthenticated: boolean;
}

export interface PayLoadLogOutInterface {
  isAuthenticated: boolean;
}

export interface PayLoadValidateAuthenticationInterface {
  isAuthenticated: boolean;
}
