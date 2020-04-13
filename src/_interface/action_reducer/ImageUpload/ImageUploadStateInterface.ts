export interface ImageUploadCollectionStateInterface {
  pictureFiles: File[];
  pictureDataURLs: string[];
}

export interface ImageUploadSendToServerStateInterface {
  pictureFiles: File[];
}

export interface ImageUploadApiResponseStateInterface {
  //   filename, label, percentage
  data: [string, string, number][];
}
