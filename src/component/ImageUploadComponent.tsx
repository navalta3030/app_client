import * as React from "react";
import { Container } from "reactstrap";
import { connect } from "react-redux";
import ImageUploader from "react-images-upload";
import FlipMove from "react-flip-move";

// custom imports
import {
  ImageUploadOnDrop,
  ImageUploadOnRemove
} from "action/ImageUploadAction";
import { RootState } from "ReduxStore";
import ImageUploadComponentInterface from "_interface/component/ImageUploadComponentInterface";
import { ALLOWED_IMAGE_EXTENSIONS } from "_utils/ConstantVariables";

const AllowedImageExtension: string[] = ALLOWED_IMAGE_EXTENSIONS;

const ImageUploadComponent: React.FC<ImageUploadComponentInterface> = ({
  pictureDataURLs,
  pictureFiles,
  ImageUploadOnDrop,
  ImageUploadOnRemove
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

    ImageUploadOnRemove(filteredFiles, filteredPictures);
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
          onChange={ImageUploadOnDrop}
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
        </div>
      </Container>
    </div>
  );
};

const mapDispatchToProps = (dispatch: any): any => {
  return {
    ImageUploadOnDrop: (
      pictureFiles: File[],
      pictureDataURLs: string[]
    ): any => {
      dispatch(ImageUploadOnDrop(pictureFiles, pictureDataURLs));
    },
    ImageUploadOnRemove: (
      pictureFiles: File[],
      pictureDataURLs: string[]
    ): any => {
      dispatch(ImageUploadOnRemove(pictureFiles, pictureDataURLs));
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
