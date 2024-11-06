import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  priceRange: [0, Infinity],
  colors: [],
  lengths: [],
  sizes: [],
  fit: [],
  category: [],
  gender: [],
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setPriceRange: (state, action) => {
      state.priceRange = action.payload;
    },
    setColors: (state, action) => {
      state.colors = action.payload;
    },
    setLengths: (state, action) => {
      state.lengths = action.payload;
    },
    setSizes: (state, action) => {
      state.sizes = action.payload;
    },
    setFit: (state, action) => {
      state.fit = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setGender: (state, action) => {
      state.gender = action.payload;
    },
    resetFilters: (state) => {
      return initialState;
    },
  },
});

export const {
  setPriceRange,
  setColors,
  setLengths,
  setSizes,
  setFit,
  setCategory,
  setGender,
  resetFilters,
} = filterSlice.actions;

export default filterSlice.reducer;
