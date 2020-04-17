import {
  ONDROP,
  ImageUploadActionTypes,
  ONREMOVE,
  ONSENDTOSERVER
} from "_interface/action_reducer/ImageUpload/ImageUploadActionTypesInterface";
import {
  ImageUploadCollectionStateInterface,
  ImageUploadApiResponseStateInterface
} from "_interface/action_reducer/ImageUpload/ImageUploadStateInterface";
import { callApiPostFormData } from "_utils/CallApi";

export const OnDrop = (
  payload: ImageUploadCollectionStateInterface
): ImageUploadActionTypes => ({
  type: ONDROP,
  payload: payload
});

export const OnRemove = (
  payload: ImageUploadCollectionStateInterface
): ImageUploadActionTypes => ({
  type: ONREMOVE,
  payload: payload
});

export const OnSendToServer = (
  payload: ImageUploadApiResponseStateInterface
): ImageUploadActionTypes => ({
  type: ONSENDTOSERVER,
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
export const ImageCollectionOnDrop = (
  pictureFiles: File[],
  pictureDataURLs: string[]
) => (dispatch: any): any => {
  dispatch(OnDrop({ pictureFiles, pictureDataURLs }));
};

/**
 * Function whenever removes a photo prior to upload.
 * used in {@link "Component/ImageUploadComponent.tsx"}
 * source library - {@link https://github.com/JakeHartnell/react-images-upload}
 *
 * @param pictureFiles - collection of array of files
 * @param pictureDataURLs - collection of array of base64string images
 */
export const ImageCollectionOnRemove = (
  pictureFiles: File[],
  pictureDataURLs: string[]
) => (dispatch: any): any => {
  dispatch(OnRemove({ pictureFiles, pictureDataURLs }));
};

export const ImageOnSendToServer = (pictureFiles: File[]) => (
  dispatch: any
): any => {
  const ImagePredictionResponse: Promise<ImageUploadApiResponseStateInterface> = callApiPostFormData(
    "/api/predictImage",
    pictureFiles,
    true
  );

  ImagePredictionResponse.then(res => {
    dispatch(OnSendToServer(res));
  });
};
