import { configureStore } from "@reduxjs/toolkit";
import appSettingsSlice from "./slices/applicaton.slice";

export const store = configureStore({
  reducer: {
    appSettings: appSettingsSlice,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({
  //     serializableCheck: false,
  //   }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
