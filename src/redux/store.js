import { configureStore } from "@reduxjs/toolkit";
import layoutSlice from "./slices/layout-slice";
import userSlice from "./slices/user-slice";
import cartSlice from "./slices/cart-slice";

const store = configureStore({
  reducer: {
    layout: layoutSlice,
    user: userSlice,
    cart: cartSlice,
  },
});

export default store;
