import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiLoading, apiLoadingEnd } from "../Loading/LoadingSlice";
import { notifier } from "../../../components/Notifier";
import { loginApi } from "./Api";

export const userLogin = createAsyncThunk(
  "user_login",
  async (data, { dispatch, rejectWithValue }) => {
    try {
      dispatch(apiLoading());
      const response = await loginApi(data);
      console.log("RESPONSE STATUS: ", response.status);
      if (response?.status) {
        localStorage.setItem("authorization", JSON.stringify(response.data));
        return response.data;
      } else {
        notifier.error(response?.message);
      }
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    } finally {
      dispatch(apiLoadingEnd());
    }
  }
);
