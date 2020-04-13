import {
  ImageUploadCollectionInitialState,
  ImageUploadApiResponseInitialState
} from "./InitialState/ImageUploadInitialState";
import {
  ONCHANGE,
  ImageUploadActionTypes,
  ONSENDTOSERVER
} from "_interface/action_reducer/ImageUpload/ImageUploadActionTypesInterface";
import {
  ImageUploadCollectionStateInterface,
  ImageUploadApiResponseStateInterface
} from "_interface/action_reducer/ImageUpload/ImageUploadStateInterface";

export const ImageUploadReducer = (
  state = ImageUploadCollectionInitialState,
  action: ImageUploadActionTypes
): ImageUploadCollectionStateInterface => {
  switch (action.type) {
    case ONCHANGE:
      return Object.assign({}, state, {
        ...state,
        pictureFiles: action.payload.pictureFiles,
        pictureDataURLs: action.payload.pictureDataURLs
      });
    default:
      return state;
  }
};

export const ImageUploadApiResponseReducer = (
  state = ImageUploadApiResponseInitialState,
  action: ImageUploadActionTypes
): ImageUploadApiResponseStateInterface => {
  switch (action.type) {
    case ONSENDTOSERVER:
      return Object.assign({}, state, {
        ...state,
        data: action.payload.data
      });
    default:
      return state;
  }
};
