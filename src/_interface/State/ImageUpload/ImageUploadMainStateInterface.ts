/* eslint-disable prettier/prettier */
import ImageUploadComponentInterface from "./ImageUploadComponentStateInterface";
import { ImageUploadApiResponsePayloadInterface } from '_interface/ActionReducer/ImageUpload/ImageUploadPayloadInterface';

export default interface ImageUploadMainStateInterface extends ImageUploadComponentInterface, ImageUploadApiResponsePayloadInterface {
  requesting: boolean;
  dispatch: any;
}
