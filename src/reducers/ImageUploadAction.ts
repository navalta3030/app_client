import ImageUploadInitialState from "./InitialState/ImageUploadInitialState";
import { ImageUploadStateInterface } from "_interface/reducer/ReducerStateInterface";
import {
  ONDROP,
  ImageUploadActionTypes,
  ONREMOVE
} from "_interface/action/ImageUpload/ImageUploadActionInterface";

export const ImageUploadReducer = (
  state = ImageUploadInitialState,
  action: ImageUploadActionTypes
): ImageUploadStateInterface => {
  switch (action.type) {
    case ONDROP:
      return Object.assign({}, state, {
        ...state,
        pictureFiles: action.payload.pictureFiles,
        pictureDataURLs: action.payload.pictureDataURLs
      });
    case ONREMOVE:
      return Object.assign({}, state, {
        ...state,
        pictureFiles: action.payload.pictureFiles,
        pictureDataURLs: action.payload.pictureDataURLs
      });
    default:
      return state;
  }
};
