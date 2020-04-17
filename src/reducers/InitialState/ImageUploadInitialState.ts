import {
  ImageUploadCollectionStateInterface,
  ImageUploadApiResponseStateInterface
} from "_interface/action_reducer/ImageUpload/ImageUploadStateInterface";

const ImageUploadCollectionInitialState: ImageUploadCollectionStateInterface = {
  pictureFiles: [],
  pictureDataURLs: []
};

const ImageUploadApiResponseInitialState: ImageUploadApiResponseStateInterface = {
  //      filename, label, percentage
  data: [["", "", 0]]
};
export {
  ImageUploadCollectionInitialState,
  ImageUploadApiResponseInitialState
};
