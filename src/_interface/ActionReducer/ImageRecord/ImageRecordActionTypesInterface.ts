import {
  ImageRecordPayloadInterface,
  ImageRecordFetchingPayloadInterface
} from "./ImageRecordPayloadInterface";

export const ONCHANGERECORD = "ONCHANGERECORD";
export const ONIMAGERECORDFETCHING = "ONIMAGERECORDFETCHING";

export interface ImageRecordActionInterface {
  type: typeof ONCHANGERECORD;
  payload: ImageRecordPayloadInterface;
}

export interface ImageRecordFetchingActionInterface {
  type: typeof ONIMAGERECORDFETCHING;
  payload: ImageRecordFetchingPayloadInterface;
}

export type ImageRecordActionTypes =
  | ImageRecordActionInterface
  | ImageRecordFetchingActionInterface;
