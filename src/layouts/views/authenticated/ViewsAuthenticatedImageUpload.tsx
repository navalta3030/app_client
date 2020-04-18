import * as React from "react";

// custom imports
import ImageUploadComponent from "component/ImageUploadComponent";
import { ImageUploadCollectionInitialState } from "reducers/InitialState/ImageUploadInitialState";
import {
  ImageCollectionOnChange,
  ImageOnSendToServer
} from "action/ImageUploadAction";

export default class ViewsAuthenticatedImageUpload extends React.Component {
  render(): React.ReactElement {
    return (
      <div>
        <ImageUploadComponent
          {...ImageUploadCollectionInitialState}
          ImageCollectionOnChange={ImageCollectionOnChange}
          ImageOnSendToServer={ImageOnSendToServer}
        ></ImageUploadComponent>
      </div>
    );
  }
}
