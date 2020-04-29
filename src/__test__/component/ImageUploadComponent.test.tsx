import React from "react";
import ReactDom from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

// custom import
import { rootReducer } from "ReduxStore";
import ImageUploadMainComponent from "component/ImageUpload/ImageUploadMainComponent";
import {
  ImageCollectionOnChange,
  ImageOnSendToServer
} from "action/ImageUploadAction";

it("renders Image Upload component without crashing", () => {
  const div = document.createElement("div");
  const props = {
    dispatch: jest.fn(),
    pictureFiles: [],
    pictureDataURLs: [],
    data: [["", "", 0]],
    requesting: false,
    ImageCollectionOnChange: ImageCollectionOnChange,
    ImageOnSendToServer: ImageOnSendToServer
  };

  const store = createStore(rootReducer);

  ReactDom.render(
    <Provider store={store}>
      <BrowserRouter>
        <ImageUploadMainComponent {...props} />
      </BrowserRouter>
    </Provider>,
    div
  );
});
