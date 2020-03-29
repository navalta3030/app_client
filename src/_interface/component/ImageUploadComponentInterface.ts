import {
  ImageUploadOnDrop,
  ImageUploadOnRemove
} from "action/ImageUploadAction";

export default interface ImageUploadComponentInterface {
  pictureFiles: File[];
  pictureDataURLs: string[];
  ImageUploadOnDrop: typeof ImageUploadOnDrop;
  ImageUploadOnRemove: typeof ImageUploadOnRemove;
}
