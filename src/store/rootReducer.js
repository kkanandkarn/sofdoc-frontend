import { combineSlices } from "@reduxjs/toolkit";
import Auth from "./slices/Auth/AuthSlice";
import Loading from "./slices/Loading/LoadingSlice";
import Sidebar from "./slices/Sidebar/SidebarSlice";
export const rootReducer = combineSlices({
  loader: Loading,
  auth: Auth,
  sidebar: Sidebar,
});
