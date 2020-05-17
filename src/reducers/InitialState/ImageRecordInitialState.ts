/* eslint-disable @typescript-eslint/camelcase */
import { ImageRecordStateInterface } from "_interface/State/ImageRecord/ImageRecordStateInterface";

const ImageRecordInitialState: ImageRecordStateInterface = {
  data: [
    {
      assistant_prediction: "",
      doctor_prediction: "",
      link: ""
    }
  ],
  fetching: false
};

export default ImageRecordInitialState;
