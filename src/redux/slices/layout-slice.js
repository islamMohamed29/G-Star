import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  navOpen: false,
  mainLoading: false,
};

const layoutSlice = createSlice({
  initialState,
  name: "layoutSlice",
  reducers: {
    navOpen(state, action) {
      state.navOpen = action.payload;
    },
    mainLoading(state, action) {
      state.mainLoading = action.payload;
    },
  },
});
export const { navOpen, mainLoading } = layoutSlice.actions;
export default layoutSlice.reducer;
