import {
  ONCHANGE,
  ImageUploadActionTypes,
  ONSENDTOSERVER,
  ONREQUESTING
} from "_interface/ActionReducer/ImageUpload/ImageUploadActionTypesInterface";
import {
  ImageUploadCollectionPayloadInterface,
  ImageUploadApiResponsePayloadInterface,
  ImageUploadRequestingPayloadInterface
} from "_interface/ActionReducer/ImageUpload/ImageUploadPayloadInterface";
import { callApiPostFormData } from "_utils/CallApi";
import { UserAlert } from "./AlertAction";

export const OnChange = (
  payload: ImageUploadCollectionPayloadInterface
): ImageUploadActionTypes => ({
  type: ONCHANGE,
  payload: payload
});

export const OnSendToServer = (
  payload: ImageUploadApiResponsePayloadInterface
): ImageUploadActionTypes => ({
  type: ONSENDTOSERVER,
  payload: payload
});

export const onRequesting = (
  payload: ImageUploadRequestingPayloadInterface
): ImageUploadActionTypes => ({
  type: ONREQUESTING,
  payload: payload
});

/**
 * Function whenever user upload a photo.
 * used in {@link "Component/ImageUploadComponent.tsx"}
 * source library - {@link https://github.com/JakeHartnell/react-images-upload}
 *
 * @param pictureFiles - collection of array of files
 * @param pictureDataURLs - collection of array of base64string images
 */
export const ImageCollectionOnChange = (
  pictureFiles: File[],
  pictureDataURLs: string[]
) => (dispatch: any): any => {
  dispatch(OnChange({ pictureFiles, pictureDataURLs }));
};

/**
 * Function that triggers the loading component everytime we send image to the server
 *
 * @param pictureFiles - state of component if it's going to be showned
 */
export const ImageOnRequesting = (requesting: boolean) => (
  dispatch: any
): any => {
  dispatch(onRequesting({ requesting }));
};

/**
 * Function that sends the pictureFiles to the server for prediction
 * used in {@link "Component/ImageUploadComponent.tsx"}
 *
 * @param pictureFiles - collection of array of files
 */
export const ImageOnSendToServer = (pictureFiles: File[]) => (
  dispatch: any
): any => {
  // empty the pictures
  dispatch(ImageCollectionOnChange([], []));

  // turn the screen into loading
  dispatch(ImageOnRequesting(true));

  const ImagePredictionResponse: Promise<ImageUploadApiResponsePayloadInterface> = callApiPostFormData(
    "/api/upload",
    pictureFiles,
    true
  );

  ImagePredictionResponse.then(res => {
    if (res) {
      dispatch(OnSendToServer(res));
    } else {
      dispatch(UserAlert("Service is currently Unavailable"));
    }

    // turn the screen into loading
    dispatch(ImageOnRequesting(false));
  });
};
