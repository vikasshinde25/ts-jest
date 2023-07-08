import { createAsyncThunk } from "@reduxjs/toolkit";

import axiosInstance from "../../axios";

import {
  API_LOGIN,
  API_LOGOUT,
  API_USER_ME,
  PATH_LOGIN,
} from "../../constants";

// create async thunk for user login
export const userLogin = createAsyncThunk(
  "user/login",
  async (
    loginData: {
      email: string;
      password: string;
    },
    thunkAPI
  ) => {
    const payloadData = {
      email: loginData?.email,
      password: loginData?.password,
      google_id: "GA1.2.2132106479.1686759283",
    };
    const params = {
      customer: "",
    };
    return axiosInstance
      .post(API_LOGIN, payloadData, {
        params,
      })
      .then((response) => {
        if (response?.status === 200) {
          localStorage.setItem("token", response?.data?.token);
          return response;
        }
        localStorage.removeItem("token");
        return response;
      })
      .catch((error) => {
        localStorage.removeItem("token");
        const errorMessage = error?.response;
        return thunkAPI.rejectWithValue(errorMessage);
      });
  }
);

// create async thunk for user logout
export const userLogout = createAsyncThunk("user/logout", async () => {
  return axiosInstance
    .post(API_LOGOUT, {})
    .then((response) => {
      if (response?.status === 204) {
        localStorage.clear();
        window.location.href = PATH_LOGIN;
        return response;
      }

      return response;
    })
    .catch((error) => {
      const errorMessage = error?.response;
      return errorMessage;
    });
});

// create async thunk for get user details
export const userMe = createAsyncThunk(
  "user/me",
  async (customerId: string) => {
    const params = { customer: customerId };

    return axiosInstance
      .get(API_USER_ME, { params })
      .then((response) => {
        return response;
      })
      .catch((error) => {
        const errorMessage = error?.response;
        return errorMessage;
      });
  }
);
