import * as React from "react";
import { connect } from "react-redux";
import { RootState } from "ReduxStore";
import { Spinner, Container, Button } from "reactstrap";

// custom imports
import {
  ImageCollectionOnChange,
  ImageOnSendToServer,
  OnSendToServer
} from "action/ImageUploadAction";
import ImageUploadComponent from "./ImageUploadComponent";
import ImageUploadResultComponent from "./ImageUploadResultComponent";
import ImageUploadMainStateInterface from "_interface/State/ImageUpload/ImageUploadMainStateInterface";
import { ImageUploadApiResponsePayloadInterface } from "_interface/ActionReducer/ImageUpload/ImageUploadPayloadInterface";

const ImageUploadMainComponent: React.FC<ImageUploadMainStateInterface> = ({
  pictureFiles,
  pictureDataURLs,
  data,
  requesting,
  ImageCollectionOnChange,
  ImageOnSendToServer,
  dispatch
}): React.ReactElement => {
  const handleOnAnotherRequest = (): void => {
    //empty data
    const emptyData: ImageUploadApiResponsePayloadInterface = {
      data: [["", "", 0]]
    };
    dispatch(OnSendToServer({ ...emptyData }));
  };

  if (requesting) {
    return (
      <Container className="icon-loading">
        <Spinner color="primary" />
      </Container>
    );
  } else {
    if (data[0][0] === "") {
      return (
        <ImageUploadComponent
          ImageCollectionOnChange={ImageCollectionOnChange}
          ImageOnSendToServer={ImageOnSendToServer}
          pictureFiles={pictureFiles}
          pictureDataURLs={pictureDataURLs}
        ></ImageUploadComponent>
      );
    } else {
      return (
        <div className="d-flex flex-column justify-content-around align-items-center h-50">
          <Button
            color="secondary"
            className="w-50"
            onClick={handleOnAnotherRequest}
          >
            Send Another Request
          </Button>
          <ImageUploadResultComponent data={data}></ImageUploadResultComponent>
        </div>
      );
    }
  }
};

const mapDispatchToProps = (dispatch: any): any => {
  return {
    dispatch,
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
  pictureDataURLs: state.imageUpload.pictureDataURLs,
  data: state.imageUpload.data,
  requesting: state.imageUpload.requesting
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ImageUploadMainComponent);
