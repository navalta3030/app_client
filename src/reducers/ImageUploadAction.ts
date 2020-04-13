import ImageUploadInitialState from "./InitialState/ImageUploadInitialState";
import {
  ONDROP,
  ImageUploadActionTypes,
  ONREMOVE
} from "_interface/action_reducer/ImageUpload/ImageUploadActionInterface";
import { PayloadImageInterface } from "_interface/action_reducer/ImageUpload/ImageUploadActionPayloadInterface";

export const ImageUploadReducer = (
  state = ImageUploadInitialState,
  action: ImageUploadActionTypes
): PayloadImageInterface => {
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
