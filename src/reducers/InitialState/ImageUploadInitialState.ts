import {
  ImageCollectionOnChange,
  ImageOnSendToServer
} from "action/ImageUploadAction";
import ImageUploadMainStateInterface from "_interface/State/ImageUpload/ImageUploadMainStateInterface";
import { useDispatch } from "react-redux";

const ImageUploadInitialState: ImageUploadMainStateInterface = {
  pictureFiles: [],
  pictureDataURLs: [],
  data: [["", "", 0]],
  requesting: false,
  ImageCollectionOnChange: ImageCollectionOnChange,
  ImageOnSendToServer: ImageOnSendToServer,
  dispatch: useDispatch
};

export default ImageUploadInitialState;
