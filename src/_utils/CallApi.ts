import axios from "axios";

import { getJWT, getNameJWT, getEmailJWT } from "_utils/JwtHandler";

/**
 * Description - @GetApi helper
 */
const callApiGet = async (endpoint: string, secured: boolean): Promise<any> => {
  const headers = {};

  if (secured) {
    headers["Authorization"] = "Bearer " + getJWT();
  }
  return await axios
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
const callApiPost = async (
  endpoint: string,
  data: any,
  secured: boolean
): Promise<any> => {
  const headers = {};

  if (secured) {
    headers["Authorization"] = "Bearer " + getJWT();
  }

  return await axios
    .post(endpoint, data, { headers })
    .then(res => {
      return res.data;
    })
    .catch(err => {
      console.log(err);
    });
};

/**
 * Description - @PostApiForm helper for sending images/blobs and any form of files
 */
const callApiPostFormData = async (
  endpoint: string,
  data: File[],
  secured: boolean
): Promise<any> => {
  const formData = new FormData();
  const headers = {};

  if (secured) {
    headers["Authorization"] = "Bearer " + getJWT();
  }

  // append the files
  data.forEach((item: File) => formData.append("file", item));

  // add meta data
  const user = {
    name: getNameJWT(),
    email: getEmailJWT()
  };
  formData.append("meta_data", JSON.stringify(user));
  return await axios
    .post(endpoint, formData, { headers })
    .then(res => {
      return res.data;
    })
    .catch(err => {
      console.log(err);
    });
};

export { callApiGet, callApiPost, callApiPostFormData };
