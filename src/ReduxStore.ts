import { combineReducers } from "redux";

// custom imports
import { AccountReducer } from "reducers/AccountReducers";
import { ImageUploadReducer } from "reducers/ImageUploadAction";

export const rootReducer = combineReducers({
  account: AccountReducer,
  imageUpload: ImageUploadReducer
});

export type RootState = ReturnType<typeof rootReducer>;
