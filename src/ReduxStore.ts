import { combineReducers } from "redux";

// custom imports
import { AccountReducer } from "reducers/AccountReducers";
import {
  ImageUploadReducer,
  ImageUploadApiResponseReducer
} from "reducers/ImageUploadReducer";
import { AlertReducer } from "reducers/AlertReducer";

export const rootReducer = combineReducers({
  account: AccountReducer,
  imageUpload: ImageUploadReducer,
  imageUploadApiResponse: ImageUploadApiResponseReducer,
  alert: AlertReducer
});

export type RootState = ReturnType<typeof rootReducer>;
