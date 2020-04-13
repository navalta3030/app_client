import {
  ONCHANGE,
  ImageUploadActionTypes,
  ONSENDTOSERVER
} from "_interface/action_reducer/ImageUpload/ImageUploadActionTypesInterface";
import {
  ImageUploadCollectionStateInterface,
  ImageUploadApiResponseStateInterface
} from "_interface/action_reducer/ImageUpload/ImageUploadStateInterface";
import { callApiPostFormData } from "_utils/CallApi";

export const OnChange = (
  payload: ImageUploadCollectionStateInterface
): ImageUploadActionTypes => ({
  type: ONCHANGE,
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
export const ImageCollectionOnChange = (
  pictureFiles: File[],
  pictureDataURLs: string[]
) => (dispatch: any): any => {
  dispatch(OnChange({ pictureFiles, pictureDataURLs }));
};

export const ImageOnSendToServer = (pictureFiles: File[]) => (
  dispatch: any
): any => {
  console.log("calling");
  const ImagePredictionResponse: Promise<ImageUploadApiResponseStateInterface> = callApiPostFormData(
    "/predictImage",
    pictureFiles,
    true
  );

  ImagePredictionResponse.then(res => {
    dispatch(OnSendToServer(res));
  });
};
