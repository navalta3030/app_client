import axios from "axios";

import { getJWT } from "_utils/JwtHandler";
import { API_SERVER } from "_utils/ConstantVariables";

/**
 * Description - @GetApi helper
 */
const callApiGet = (endpoint: string, secured: boolean): void => {
  const url = API_SERVER + endpoint;
  const headers = {};

  if (secured) {
    headers["Authorization"] = "Bearer " + getJWT();
  }
  axios
    .get(url, { headers })
    .then(res => console.log(res))
    .catch(err => console.log(err));
};

/**
 * Description - @PostApi helper
 */
const callApiPost = async (
  endpoint: string,
  data: any,
  secured: boolean
): Promise<any> => {
  // const url = API_SERVER + endpoint;
  const url = endpoint;
  const headers = {};
  let retval;

  if (secured) {
    headers["Authorization"] = "Bearer " + getJWT();
  }

  await axios
    .post(url, data, { headers })
    .then(res => {
      retval = res.data;
    })
    .catch(err => console.log(err));

  return retval;
};

export { callApiGet, callApiPost };
