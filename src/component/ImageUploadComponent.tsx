import * as React from "react";
import { Container, Button } from "reactstrap";
import { connect } from "react-redux";
import ImageUploader from "react-images-upload";
import _ from "lodash";

// custom imports
import {
  ImageCollectionOnChange,
  ImageOnSendToServer
} from "action/ImageUploadAction";
import { RootState } from "ReduxStore";
import ImageUploadComponentInterface from "_interface/component/ImageUploadComponentInterface";
import { ALLOWED_IMAGE_EXTENSIONS } from "_utils/ConstantVariables";

const AllowedImageExtension: string[] = ALLOWED_IMAGE_EXTENSIONS;

const ImageUploadComponent: React.FC<ImageUploadComponentInterface> = ({
  pictureDataURLs,
  pictureFiles,
  ImageCollectionOnChange,
  ImageOnSendToServer
}): React.ReactElement => {
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

const mapDispatchToProps = (dispatch: any): any => {
  return {
    ImageCollectionOnChange: (
      pictureFiles: File[],
      pictureDataURLs: string[]
    ): any => {
      dispatch(ImageCollectionOnChange(pictureFiles, pictureDataURLs));
    },
    ImageOnSendToServer: (pictureFiles: File[]): any => {
      dispatch(ImageOnSendToServer(pictureFiles));
    }
  };
};

const mapStateToProps = (state: RootState): any => ({
  pictureFiles: state.imageUpload.pictureFiles,
  pictureDataURLs: state.imageUpload.pictureDataURLs
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ImageUploadComponent);
