export interface AccountStateInterface {
  name: string;
  email: string;
  data: any;
  isAuthenticated: boolean;
}

export interface AuthenticationStateInterface {
  isAuthenticated: boolean;
}

export interface LoginApiResponseStateInterface {
  access_token: string;
  refresh_token: string;
  exp: number;
}
