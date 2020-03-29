import {
  PayLoadOnDropInterface,
  PayLoadOnRemoveInterface
} from "./ImageUploadActionPayloadInterface";

export const ONDROP = "ONDROP";
export const ONREMOVE = "ONREMOVE";

export interface ImageUploadOnDropInterface {
  type: typeof ONDROP;
  payload: PayLoadOnDropInterface;
}

export interface ImageUploadOnRemoveInterface {
  type: typeof ONREMOVE;
  payload: PayLoadOnRemoveInterface;
}

export type ImageUploadActionTypes =
  | ImageUploadOnRemoveInterface
  | ImageUploadOnDropInterface;
