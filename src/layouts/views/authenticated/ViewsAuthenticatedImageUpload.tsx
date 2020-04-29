import * as React from "react";
import ImageUploadMainComponent from "component/ImageUpload/ImageUploadMainComponent";
import ImageUploadInitialState from "reducers/InitialState/ImageUploadInitialState";

export default class ViewsAuthenticatedImageUpload extends React.Component {
  render(): React.ReactElement {
    return (
      <ImageUploadMainComponent
        {...ImageUploadInitialState}
      ></ImageUploadMainComponent>
    );
  }
}
