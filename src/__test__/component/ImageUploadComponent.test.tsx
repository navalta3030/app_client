import React from "react";
import ReactDom from "react-dom";
import ImageUploadComponent from "component/ImageUploadComponent";
import ImageUploadInitialState from "reducers/InitialState/ImageUploadInitialState";
import {
  ImageUploadOnDrop,
  ImageUploadOnRemove
} from "action/ImageUploadAction";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { rootReducer } from "ReduxStore";

it("renders linechart component without crashing", () => {
  const div = document.createElement("div");
  const props = {
    ...ImageUploadInitialState,
    dispatch: jest.fn(),
    ImageUploadOnDrop: ImageUploadOnDrop,
    ImageUploadOnRemove: ImageUploadOnRemove
  };

  const store = createStore(rootReducer);

  ReactDom.render(
    <Provider store={store}>
      <BrowserRouter>
        <ImageUploadComponent {...props} />
      </BrowserRouter>
    </Provider>,
    div
  );
});
