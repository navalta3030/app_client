import { LOCAL_STORAGE_AUTH_NAME } from "./ConstantVariables";

export const setJWT = (jwt: string): void => {
  localStorage.setItem(LOCAL_STORAGE_AUTH_NAME, jwt);
};

export const getJWT = (): string | null => {
  return localStorage.getItem(LOCAL_STORAGE_AUTH_NAME);
};

export const deleteJWT = (): void => {
  localStorage.removeItem(LOCAL_STORAGE_AUTH_NAME);
};

export const refreshJWt = (jwt: string): void => {
  localStorage.setItem(LOCAL_STORAGE_AUTH_NAME, jwt);
};

export const getNameJWT = (): string => {
  const JwtToken: string | null = getJWT();
  if (JwtToken) {
    const header: any = JSON.parse(atob(JwtToken.split(".")[1]));
    return header.name;
  }

  return "";
};

export const getEmailJWT = (): string => {
  const JwtToken: string | null = getJWT();
  if (JwtToken) {
    const header: any = JSON.parse(atob(JwtToken.split(".")[1]));

    return header.email;
  }

  return "";
};
