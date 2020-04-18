import {
  ImageCollectionOnChange,
  ImageOnSendToServer
} from "action/ImageUploadAction";

export default interface ImageUploadComponentInterface {
  pictureFiles: File[];
  pictureDataURLs: string[];
  ImageCollectionOnChange: typeof ImageCollectionOnChange;
  ImageOnSendToServer: typeof ImageOnSendToServer;
}
