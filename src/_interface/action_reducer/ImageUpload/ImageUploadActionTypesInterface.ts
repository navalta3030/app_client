import {
  ImageUploadCollectionStateInterface,
  ImageUploadApiResponseStateInterface
} from "./ImageUploadStateInterface";

export const ONCHANGE = "ONCHANGE";
export const ONSENDTOSERVER = "ONSENDTOSERVER";

export interface ImageCollectionOnChangeActionInterface {
  type: typeof ONCHANGE;
  payload: ImageUploadCollectionStateInterface;
}

export interface ImageOnSendToServerActionInterface {
  type: typeof ONSENDTOSERVER;
  payload: ImageUploadApiResponseStateInterface;
}

export type ImageUploadActionTypes =
  | ImageCollectionOnChangeActionInterface
  | ImageOnSendToServerActionInterface;
