import { getJWT, setJWT, deleteJWT, refreshJWt } from "_utils/JwtHandler";

it("Should test JWTHandler", () => {
  jest.spyOn(Storage.prototype, "getItem").mockImplementation(() => "Hello");
  expect(getJWT()).toBeDefined();

  jest.spyOn(Storage.prototype, "setItem").mockImplementation(() => null);
  expect(setJWT("test")).toBeUndefined();

  jest.spyOn(Storage.prototype, "removeItem").mockImplementation(() => null);
  expect(deleteJWT()).toBeUndefined();

  jest.spyOn(Storage.prototype, "getItem").mockImplementation(() => null);
  expect(refreshJWt("test")).toBeUndefined();
});
