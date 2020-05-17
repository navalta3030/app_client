export interface ImageRecordPayloadInterface {
  data: {
    assistant_prediction: string;
    doctor_prediction: string;
    link: string;
  }[];
}

export interface ImageRecordFetchingPayloadInterface {
  fetching: boolean;
}
