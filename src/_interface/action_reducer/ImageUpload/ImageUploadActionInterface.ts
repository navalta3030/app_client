import { PayloadImageInterface } from "./ImageUploadActionPayloadInterface";

export const ONDROP = "ONDROP";
export const ONREMOVE = "ONREMOVE";

export interface ImageUploadOnDropInterface {
  type: typeof ONDROP;
  payload: PayloadImageInterface;
}

export interface ImageUploadOnRemoveInterface {
  type: typeof ONREMOVE;
  payload: PayloadImageInterface;
}

export type ImageUploadActionTypes =
  | ImageUploadOnRemoveInterface
  | ImageUploadOnDropInterface;
