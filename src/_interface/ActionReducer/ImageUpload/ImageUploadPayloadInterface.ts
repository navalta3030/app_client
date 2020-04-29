export interface ImageUploadCollectionPayloadInterface {
  pictureFiles: File[];
  pictureDataURLs: string[];
}

export interface ImageUploadSendToServerPayloadInterface {
  pictureFiles: File[];
}

export interface ImageUploadApiResponsePayloadInterface {
  //   filename, label, percentage
  data: [string, string, number][];
}

export interface ImageUploadRequestingPayloadInterface {
  requesting: boolean;
}
