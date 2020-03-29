export interface AccountStateInterface {
  user: {
    name: string;
    data: any;
  };
  isAuthenticated: boolean;
}

export interface ImageUploadStateInterface {
  pictureFiles: File[];
  pictureDataURLs: string[];
}
