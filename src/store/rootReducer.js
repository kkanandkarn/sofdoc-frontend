import { combineSlices } from "@reduxjs/toolkit";
import Auth from "./slices/Auth/AuthSlice";
import Loading from "./slices/Loading/LoadingSlice";
export const rootReducer = combineSlices({
  Loader: Loading,
  Auth: Auth,
});
