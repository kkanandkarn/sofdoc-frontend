import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  authorization: null,
  globalPermissions: [],
  activePath: "home",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      const { user, globalPermissions, authorization } = action.payload;

      state.user = user;
      state.authorization = authorization;
      state.globalPermissions = globalPermissions || [];
    },

    logout(state) {
      state.user = null;
      state.authorization = null;
      state.globalPermissions = [];
    },
    setActivePath(state, action) {
      const { activePath } = action.payload;
      state.activePath = activePath;
    },
  },
});

export const { login, logout, setActivePath } = authSlice.actions;
export default authSlice.reducer;
