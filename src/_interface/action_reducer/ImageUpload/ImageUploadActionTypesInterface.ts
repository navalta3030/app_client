import {
  ImageUploadCollectionStateInterface,
  ImageUploadApiResponseStateInterface
} from "./ImageUploadStateInterface";

export const ONDROP = "ONDROP";
export const ONREMOVE = "ONREMOVE";
export const ONSENDTOSERVER = "ONSENDTOSERVER";

export interface ImageCollectionOnDropActionInterface {
  type: typeof ONDROP;
  payload: ImageUploadCollectionStateInterface;
}

export interface ImageCollectionOnRemoveActionInterface {
  type: typeof ONREMOVE;
  payload: ImageUploadCollectionStateInterface;
}

export interface ImageOnSendToServerActionInterface {
  type: typeof ONSENDTOSERVER;
  payload: ImageUploadApiResponseStateInterface;
}

export type ImageUploadActionTypes =
  | ImageCollectionOnRemoveActionInterface
  | ImageCollectionOnDropActionInterface
  | ImageOnSendToServerActionInterface;
