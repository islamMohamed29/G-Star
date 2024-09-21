import { configureStore } from "@reduxjs/toolkit";
import layoutSlice from "./slices/layout-slice";
import userSlice from "./slices/user-slice";

const store = configureStore({
  reducer: {
    layout: layoutSlice,
    user: userSlice,
  },
});

export default store;
