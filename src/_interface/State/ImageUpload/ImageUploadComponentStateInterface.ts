/* eslint-disable prettier/prettier */
import {
  ImageCollectionOnChange,
  ImageOnSendToServer
} from "action/ImageUploadAction";
import {
  ImageUploadCollectionPayloadInterface
} from "_interface/ActionReducer/ImageUpload/ImageUploadPayloadInterface";

export default interface ImageUploadComponentStateInterface
  extends ImageUploadCollectionPayloadInterface {
  ImageCollectionOnChange: typeof ImageCollectionOnChange;
  ImageOnSendToServer: typeof ImageOnSendToServer;
}
