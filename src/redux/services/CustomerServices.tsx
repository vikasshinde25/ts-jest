import { createAsyncThunk } from "@reduxjs/toolkit";

import axiosInstance from "../../axios";

import { API_CUSTOMER } from "../../constants";

// user logout auth service
const customerDetails = createAsyncThunk(
  "customerState",
  async (id: string) => {
    return axiosInstance
      .get(`${API_CUSTOMER + id}/`)
      .then((response) => {
        if (response?.status === 200) {
          return response;
        }

        return response;
      })
      .catch((error) => {
        const errorMessage = error?.response;
        return errorMessage;
      });
  }
);

export default customerDetails;
