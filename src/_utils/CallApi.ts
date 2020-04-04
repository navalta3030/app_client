import axios from "axios";
import { API_SERVER } from "config";
import { getJWT } from "./JwtHandler";

const callApiGet = (endpoint: string, secured: boolean): void => {
  const url = "http://" + API_SERVER + endpoint;
  const headers = {};
  console.log("calling :" + url);
  if (secured) {
    headers["Authorization"] = "Bearer" + getJWT();
    // headers["Access-Control-Allow-Origin"] = "*";
  }
  axios
    .get(url, { headers })
    .then(res => console.log(res))
    .catch(err => console.log(err));
};

export default callApiGet;
