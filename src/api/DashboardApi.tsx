import axiosInstance from "../axios";

import { API_DUMMY } from "../constants";

async function getDummyData() {
  const result = await axiosInstance
    .get(API_DUMMY)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error.response;
    });
  return result;
}

export default getDummyData;
