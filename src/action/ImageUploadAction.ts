import {
  ONDROP,
  ImageUploadActionTypes,
  ONREMOVE
} from "_interface/action/ImageUpload/ImageUploadActionInterface";
import {
  PayLoadOnDropInterface,
  PayLoadOnRemoveInterface
} from "_interface/action/ImageUpload/ImageUploadActionPayloadInterface";

export const OnDrop = (
  payload: PayLoadOnDropInterface
): ImageUploadActionTypes => ({
  type: ONDROP,
  payload: payload
});

export const OnRemove = (
  payload: PayLoadOnRemoveInterface
): ImageUploadActionTypes => ({
  type: ONREMOVE,
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
export const ImageUploadOnDrop = (
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
export const ImageUploadOnRemove = (
  pictureFiles: File[],
  pictureDataURLs: string[]
) => (dispatch: any): any => {
  dispatch(OnRemove({ pictureFiles, pictureDataURLs }));
};
