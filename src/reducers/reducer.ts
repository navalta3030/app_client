import { GETTEST } from "action";
import InitialStateInterface from "interface/reducer/reducer";

const initialState: InitialStateInterface = {
  test: "test"
};

export const Reducer: any = (
  state = initialState,
  action: { type: string }
) => {
  switch (action.type) {
    case GETTEST:
      return Object.assign({}, state, {
        ...state,
        test: "Worked"
      });
    default:
      return state;
  }
};
