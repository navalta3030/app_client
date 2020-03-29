import * as React from "react";

// custom imports
import ImageUploadComponent from "component/ImageUploadComponent";

export default class ViewsAuthenticatedImageUpload extends React.Component {
  render(): React.ReactElement {
    return (
      <div>
        <ImageUploadComponent></ImageUploadComponent>
      </div>
    );
  }
}
