import axiosInstance from "../axios";

import { API_LOGIN } from "../constants";

export async function checkUserValidation(userData: {
  email: string;
  password: string;
}) {
  const params = { email: userData?.email, password: userData?.password };

  const result = await axiosInstance
    .get(API_LOGIN, { params })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error?.response;
    });
  return result;
}

export async function checkUserValidation2() {
  const result = await axiosInstance
    .get(API_LOGIN)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error?.response;
    });
  return result;
}
