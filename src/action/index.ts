// THIS ARE ALL THE TYPE SELECTORS

import Action from "interface/action/action";
import InitialStateInterface from "interface/reducer/reducer";

export const GETTEST = "GETTEST";
export const getTest = (payload: InitialStateInterface): Action => ({
  type: GETTEST,
  payload: payload
});

export const setTest = (state: InitialStateInterface) => (
  dispatch: (arg0: Action) => void
) => {
  dispatch(getTest(state));
};
