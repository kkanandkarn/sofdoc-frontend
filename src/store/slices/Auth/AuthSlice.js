import { createSlice } from "@reduxjs/toolkit";
import { userLogin } from "./AuthThunk";

const initialState = {
  auth: null,
  theme: "light",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.auth = null;
      localStorage.clear();
    },
    updateTheme: (state, action) => {
      state.theme = action.payload.theme;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(userLogin.fulfilled, (state, action) => {
      state.auth = action.payload;
    });
  },
});

export const { logout, updateTheme } = authSlice.actions;

export default authSlice.reducer;
