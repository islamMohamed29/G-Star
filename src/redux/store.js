import { configureStore } from "@reduxjs/toolkit";
import layoutSlice from "./slices/layout-slice";

const store = configureStore({
  reducer: {
    layout: layoutSlice,
  },
});

export default store;
