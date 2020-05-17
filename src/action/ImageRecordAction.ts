import {
  ImageRecordPayloadInterface,
  ImageRecordFetchingPayloadInterface
} from "_interface/ActionReducer/ImageRecord/ImageRecordPayloadInterface";
import {
  ImageRecordActionTypes,
  ONCHANGERECORD,
  ONIMAGERECORDFETCHING
} from "_interface/ActionReducer/ImageRecord/ImageRecordActionTypesInterface";
import { callApiPost } from "_utils/CallApi";
import { getNameJWT, getEmailJWT } from "_utils/JwtHandler";
import ImageRecordInitialState from "reducers/InitialState/ImageRecordInitialState";

export const ImageRecord = (
  payload: ImageRecordPayloadInterface
): ImageRecordActionTypes => ({
  type: ONCHANGERECORD,
  payload: payload
});

export const ImageRecordFetching = (
  payload: ImageRecordFetchingPayloadInterface
): ImageRecordActionTypes => ({
  type: ONIMAGERECORDFETCHING,
  payload: payload
});

/**
 * User @ImageRecord
 * - Gets all the iamge record of the user
 */
export const GetUserImageRecord = () => (dispatch: any): any => {
  // trigger loading icon
  dispatch(ImageRecordFetching({ fetching: true }));

  // initialize post data
  const data = {
    Name: getNameJWT(),
    Email: getEmailJWT()
  };

  // fetch api
  const ImageRecordResponse: Promise<ImageRecordPayloadInterface> = callApiPost(
    "/api/getRecord",
    data,
    true
  );

  ImageRecordResponse.then(res => {
    if (res) {
      dispatch(ImageRecord({ ...res }));
    } else {
      dispatch(ImageRecord({ data: ImageRecordInitialState.data }));
    }
  });

  dispatch(ImageRecordFetching({ fetching: false }));
};
