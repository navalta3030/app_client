import * as React from "react";

// custom imports
import ImageUploadComponent from "component/ImageUploadComponent";
import { ImageUploadCollectionInitialState } from "reducers/InitialState/ImageUploadInitialState";
import {
  ImageCollectionOnDrop,
  ImageCollectionOnRemove,
  ImageOnSendToServer
} from "action/ImageUploadAction";

export default class ViewsAuthenticatedImageUpload extends React.Component {
  render(): React.ReactElement {
    return (
      <div>
        <ImageUploadComponent
          {...ImageUploadCollectionInitialState}
          ImageCollectionOnDrop={ImageCollectionOnDrop}
          ImageCollectionOnRemove={ImageCollectionOnRemove}
          ImageOnSendToServer={ImageOnSendToServer}
        ></ImageUploadComponent>
      </div>
    );
  }
}
