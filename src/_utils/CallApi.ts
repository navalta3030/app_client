import axios from "axios";

import { getJWT } from "_utils/JwtHandler";
import { UserAlertManualDispatch } from "action/AlertAction";
import { store } from "app";

/**
 * Description - @GetApi helper
 */
const callApiGet = (endpoint: string, secured: boolean): Promise<any> => {
  const headers = {};

  if (secured) {
    headers["Authorization"] = "Bearer " + getJWT();
  }
  return axios
    .get(endpoint, { headers })
    .then(res => {
      return res.data;
    })
    .catch(err => {
      return err.response;
    });
};

/**
 * Description - @PostApi helper
 */
const callApiPost = (
  endpoint: string,
  data: any,
  secured: boolean
): Promise<any> => {
  const headers = {};

  if (secured) {
    headers["Authorization"] = "Bearer " + getJWT();
  }

  return axios
    .post(endpoint, data, { headers })
    .then(res => {
      return res.data;
    })
    .catch(err => {
      store.dispatch(UserAlertManualDispatch(err));
    });
};

/**
 * Description - @PostApiForm helper for sending images/blobs and any form of files
 */
const callApiPostFormData = (
  endpoint: string,
  data: File[],
  secured: boolean
): Promise<any> => {
  const formData = new FormData();
  const headers = {};

  if (secured) {
    headers["Authorization"] = "Bearer " + getJWT();
  }

  data.forEach((item: File) => formData.append("file", item));

  return axios
    .post(endpoint, formData, { headers })
    .then(res => {
      console.log(res);
      return res.data;
    })
    .catch(err => {
      console.log(err);
      store.dispatch(UserAlertManualDispatch(err));
    });
};

export { callApiGet, callApiPost, callApiPostFormData };
