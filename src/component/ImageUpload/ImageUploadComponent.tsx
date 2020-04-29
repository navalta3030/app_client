import * as React from "react";
import { Container, Button } from "reactstrap";
import ImageUploader from "react-images-upload";
import _ from "lodash";

import ImageUploadComponentInterface from "_interface/State/ImageUpload/ImageUploadComponentStateInterface";
import { ALLOWED_IMAGE_EXTENSIONS } from "_utils/ConstantVariables";

const AllowedImageExtension: string[] = ALLOWED_IMAGE_EXTENSIONS;

const ImageUploadComponent: React.FC<ImageUploadComponentInterface> = ({
  pictureDataURLs,
  pictureFiles,
  ImageCollectionOnChange,
  ImageOnSendToServer
}): React.ReactElement => {
  // If the data is still empty, then let user to add some data
  return (
    <div>
      <Container fluid={true}>
        <ImageUploader
          withIcon={true}
          buttonText="Choose images"
          onChange={ImageCollectionOnChange}
          imgExtension={AllowedImageExtension}
          maxFileSize={10242880}
          withPreview={true}
        ></ImageUploader>
        <div className="ImageUploadPicturesWrapper">
          {!_.isEmpty(pictureDataURLs) ? (
            <Button
              color="secondary"
              onClick={(): any => ImageOnSendToServer(pictureFiles)}
            >
              Submit
            </Button>
          ) : null}
        </div>
      </Container>
    </div>
  );
};

export default ImageUploadComponent;
