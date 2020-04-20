export interface AccountPayloadInterface {
  name: string;
  email: string;
  data: any;
  isAuthenticated: boolean;
}

export interface AuthenticationPayloadInterface {
  isAuthenticated: boolean;
}

export interface LoginApiResponsePayloadInterface {
  access_token: string;
  refresh_token: string;
  exp: number;
}
