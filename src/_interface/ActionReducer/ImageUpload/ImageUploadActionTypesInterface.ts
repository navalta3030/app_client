import {
  ImageUploadCollectionPayloadInterface,
  ImageUploadApiResponsePayloadInterface,
  ImageUploadRequestingPayloadInterface
} from "./ImageUploadPayloadInterface";

export const ONCHANGE = "ONCHANGE";
export const ONSENDTOSERVER = "ONSENDTOSERVER";
export const ONREQUESTING = "ONREQUESTING";

export interface ImageCollectionOnChangeActionInterface {
  type: typeof ONCHANGE;
  payload: ImageUploadCollectionPayloadInterface;
}

export interface ImageOnSendToServerActionInterface {
  type: typeof ONSENDTOSERVER;
  payload: ImageUploadApiResponsePayloadInterface;
}

export interface ImageRequestingActionInterface {
  type: typeof ONREQUESTING;
  payload: ImageUploadRequestingPayloadInterface;
}

export type ImageUploadActionTypes =
  | ImageCollectionOnChangeActionInterface
  | ImageOnSendToServerActionInterface
  | ImageRequestingActionInterface;
