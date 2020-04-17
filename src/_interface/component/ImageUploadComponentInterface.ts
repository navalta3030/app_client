import {
  ImageCollectionOnDrop,
  ImageCollectionOnRemove,
  ImageOnSendToServer
} from "action/ImageUploadAction";

export default interface ImageUploadComponentInterface {
  pictureFiles: File[];
  pictureDataURLs: string[];
  ImageCollectionOnDrop: typeof ImageCollectionOnDrop;
  ImageCollectionOnRemove: typeof ImageCollectionOnRemove;
  ImageOnSendToServer: typeof ImageOnSendToServer;
}
