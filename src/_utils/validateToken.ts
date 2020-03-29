export const validateToken = (token: string | null): boolean => {
  /**
   *  @TODO : this should call the api and validate
   */
  if (token) {
    return true;
  } else {
    return false;
  }
};
