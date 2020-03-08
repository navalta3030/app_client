import { 
  GETTEST
} from "../action";

const initialState = {
  test: "test"
}


export const Reducer = ( state = initialState, action ) => {
  
  switch(action.type) {
    case GETTEST:
      return Object.assign({}, state, {
          ...state,
          test: "Worked"
      });
    default:
      return state
  }
  
};