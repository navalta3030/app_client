import ImageRecordInitialState from "./InitialState/ImageRecordInitialState";
import { ImageRecordStateInterface } from "_interface/State/ImageRecord/ImageRecordStateInterface";
import {
  ImageRecordActionTypes,
  ONCHANGERECORD,
  ONIMAGERECORDFETCHING
} from "_interface/ActionReducer/ImageRecord/ImageRecordActionTypesInterface";

const ImageRecordReducer = (
  state = ImageRecordInitialState,
  action: ImageRecordActionTypes
): ImageRecordStateInterface => {
  switch (action.type) {
    case ONCHANGERECORD:
      return Object.assign({}, state, {
        ...state,
        data: action.payload.data
      });
    case ONIMAGERECORDFETCHING:
      return Object.assign({}, state, {
        ...state,
        fetching: action.payload.fetching
      });
    default:
      return state;
  }
};

export default ImageRecordReducer;
