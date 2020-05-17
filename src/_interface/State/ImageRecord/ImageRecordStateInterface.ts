import { GetUserImageRecord } from "action/ImageRecordAction";
import {
  ImageRecordPayloadInterface,
  ImageRecordFetchingPayloadInterface
} from "_interface/ActionReducer/ImageRecord/ImageRecordPayloadInterface";

export interface ImageRecordStateInterface
  extends ImageRecordPayloadInterface,
    ImageRecordFetchingPayloadInterface {
  GetUserImageRecord?: typeof GetUserImageRecord;
}
