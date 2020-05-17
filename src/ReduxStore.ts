import { combineReducers } from "redux";

// custom imports
import ImageUploadReducer from "reducers/ImageUploadReducer";
import AccountReducer from "reducers/AccountReducers";
import AlertReducer from "reducers/AlertReducer";
import ImageRecordReducer from "reducers/ImageRecordReducer";

export const rootReducer = combineReducers({
  account: AccountReducer,
  imageUpload: ImageUploadReducer,
  imageRecord: ImageRecordReducer,
  alert: AlertReducer
});

export type RootState = ReturnType<typeof rootReducer>;
