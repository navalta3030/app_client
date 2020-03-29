import { Container } from "reactstrap";
import * as React from "react";
import ImageUploader from "react-images-upload";
import FlipMove from "react-flip-move";

const AllowedImageExtension: string[] = [".jpg", ".gif", ".png", ".gif"];

const ImageUploadComponent = (): React.ReactElement => {
  const [ImagesBase64, setImagesBase64] = React.useState<string[]>([]);
  const [ImageFiles, setImageFiles] = React.useState<File[]>([]);

  /* 
    Function is called after uploading the image.
    Array parameters are stacked are user uploads more pictures.

    {@link https://github.com/JakeHartnell/react-images-upload}
  */
  const onDrop = (pictureFiles: File[], pictureDataURLs: string[]): void => {
    console.log(pictureFiles, pictureDataURLs);

    setImagesBase64(pictureDataURLs);
    setImageFiles(pictureFiles);
  };

  /* 
    Filters the image on the array list collection by index and deletes it.
    reference : {@link https://github.com/JakeHartnell/react-images-upload/blob/master/src/component/index.js}
  */
  const removeImage = (picture: string): void => {
    const removeIndex = ImagesBase64.findIndex(e => e === picture);
    const filteredPictures = ImagesBase64.filter(
      (e, index) => index !== removeIndex
    );
    const filteredFiles = ImageFiles.filter(
      (e, index) => index !== removeIndex
    );

    setImageFiles(filteredFiles);
    setImagesBase64(filteredPictures);
  };

  /* 
    After User uploads image, this function will render the images.
    reference : {@link https://github.com/JakeHartnell/react-images-upload/blob/master/src/component/index.js}
  */
  const renderPreviewPictures = (): React.ReactElement[] => {
    return ImagesBase64.map((picture, index) => {
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

  // const styles = {
  //   display: "flex",
  //   alignItems: "center",
  //   justifyContent: "center",
  //   flexWrap: "wrap",
  //   width: "100%"
  // };

  return (
    <div>
      <Container fluid={true}>
        <ImageUploader
          withIcon={true}
          buttonText="Choose images"
          onChange={onDrop}
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

export default ImageUploadComponent;
