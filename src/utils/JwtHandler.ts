export const setJWT = (jwt: string): void => {
  localStorage.setItem("id", jwt);
};

export const getJWT = (): string | null => {
  return localStorage.getItem("id");
};

export const deleteJWT = (): void => {
  localStorage.removeItem("id");
};

export const refreshJWt = (jwt: string): void => {
  localStorage.setItem("id", jwt);
};
