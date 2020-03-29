import * as React from "react";

// custom imports
import ImageUploadComponent from "component/ImageUploadComponent";
import ImageUploadInitialState from "reducers/InitialState/ImageUploadInitialState";
import {
  ImageUploadOnDrop,
  ImageUploadOnRemove
} from "action/ImageUploadAction";

export default class ViewsAuthenticatedImageUpload extends React.Component {
  render(): React.ReactElement {
    return (
      <div>
        <ImageUploadComponent
          {...ImageUploadInitialState}
          ImageUploadOnDrop={ImageUploadOnDrop}
          ImageUploadOnRemove={ImageUploadOnRemove}
        ></ImageUploadComponent>
      </div>
    );
  }
}
