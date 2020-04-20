import { combineReducers } from "redux";

// custom imports
import ImageUploadReducer from "reducers/ImageUploadReducer";
import AccountReducer from "reducers/AccountReducers";
import AlertReducer from "reducers/AlertReducer";

export const rootReducer = combineReducers({
  account: AccountReducer,
  imageUpload: ImageUploadReducer,
  alert: AlertReducer
});

export type RootState = ReturnType<typeof rootReducer>;
