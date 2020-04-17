import * as React from "react";
import { Container, Button } from "reactstrap";
import { connect } from "react-redux";
import ImageUploader from "react-images-upload";
import FlipMove from "react-flip-move";
import _ from "lodash";

// custom imports
import {
  ImageCollectionOnDrop,
  ImageCollectionOnRemove,
  ImageOnSendToServer
} from "action/ImageUploadAction";
import { RootState } from "ReduxStore";
import ImageUploadComponentInterface from "_interface/component/ImageUploadComponentInterface";
import { ALLOWED_IMAGE_EXTENSIONS } from "_utils/ConstantVariables";

const AllowedImageExtension: string[] = ALLOWED_IMAGE_EXTENSIONS;

const ImageUploadComponent: React.FC<ImageUploadComponentInterface> = ({
  pictureDataURLs,
  pictureFiles,
  ImageCollectionOnDrop,
  ImageCollectionOnRemove,
  ImageOnSendToServer
}): React.ReactElement => {
  /**
   *  Filters the image on the array list collection by index and deletes it.
   *  reference : {@link https://github.com/JakeHartnell/react-images-upload/blob/master/src/component/index.js}
   */
  const removeImage = (picture: string): void => {
    const removeIndex = pictureDataURLs.findIndex(e => e === picture);
    const filteredPictures = pictureDataURLs.filter(
      (e, index) => index !== removeIndex
    );
    const filteredFiles = pictureFiles.filter(
      (e, index) => index !== removeIndex
    );

    ImageCollectionOnRemove(filteredFiles, filteredPictures);
  };

  /**
   *  After User uploads image, this function will render the images.
   *  reference : {@link https://github.com/JakeHartnell/react-images-upload/blob/master/src/component/index.js}
   */
  const renderPreviewPictures = (): React.ReactElement[] => {
    return pictureDataURLs.map((picture, index) => {
      return (
        <div key={index} className="uploadPictureContainer">
          <div
            className="deleteImage"
            onClick={(): void => removeImage(picture)}
          >
            X
          </div>
          <img src={picture} className="uploadPicture" alt="preview" />
        </div>
      );
    });
  };

  return (
    <div>
      <Container fluid={true}>
        <ImageUploader
          withIcon={true}
          buttonText="Choose images"
          onChange={ImageCollectionOnDrop}
          imgExtension={AllowedImageExtension}
          maxFileSize={10242880}
        ></ImageUploader>
        <div className="ImageUploadPicturesWrapper">
          <FlipMove
            enterAnimation="fade"
            leaveAnimation="fade"
            className="ImageUploadFlipMove"
          >
            {renderPreviewPictures()}
          </FlipMove>

          {_.isEmpty(pictureDataURLs) ? (
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
    ImageCollectionOnDrop: (
      pictureFiles: File[],
      pictureDataURLs: string[]
    ): any => {
      dispatch(ImageCollectionOnDrop(pictureFiles, pictureDataURLs));
    },
    ImageCollectionOnRemove: (
      pictureFiles: File[],
      pictureDataURLs: string[]
    ): any => {
      dispatch(ImageCollectionOnRemove(pictureFiles, pictureDataURLs));
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
