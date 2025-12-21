import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
  devTools: import.meta.env.VITE_NODE_ENV !== "production",
});
