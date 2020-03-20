// THIS ARE ALL THE TYPE SELECTORS

import Action from "interface/action/ActionInterface";
import InitialStateInterface from "interface/reducer/reducer";

export const GETTEST = "GETTEST";
export const getTest = (payload: InitialStateInterface): Action => ({
  type: GETTEST,
  payload: payload
});

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const setTest = (state: InitialStateInterface) => (
  dispatch: (arg0: Action) => void
) => {
  dispatch(getTest(state));
};
