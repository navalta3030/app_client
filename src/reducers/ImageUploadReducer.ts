import {
  ONCHANGE,
  ImageUploadActionTypes,
  ONSENDTOSERVER,
  ONREQUESTING
} from "_interface/ActionReducer/ImageUpload/ImageUploadActionTypesInterface";

import ImageUploadInitialState from "./InitialState/ImageUploadInitialState";
import ImageUploadMainStateInterface from "_interface/State/ImageUpload/ImageUploadMainStateInterface";

const ImageUploadReducer = (
  state = ImageUploadInitialState,
  action: ImageUploadActionTypes
): ImageUploadMainStateInterface => {
  switch (action.type) {
    case ONCHANGE:
      return Object.assign({}, state, {
        ...state,
        pictureFiles: action.payload.pictureFiles,
        pictureDataURLs: action.payload.pictureDataURLs
      });
    case ONSENDTOSERVER:
      return Object.assign({}, state, {
        ...state,
        data: action.payload.data
      });
    case ONREQUESTING:
      return Object.assign({}, state, {
        ...state,
        requesting: action.payload.requesting
      });
    default:
      return state;
  }
};

export default ImageUploadReducer;
