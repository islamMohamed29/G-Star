import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { notifySuccess } from "../../dependencies/Notification";

const initialState = {
  cartItems: JSON.parse(localStorage.getItem("cartData")) || [],
  searchTerm: "",
};

const addToLocalStorage = (data) => {
  localStorage.setItem("cartData", JSON.stringify(data));
};

const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const { id, selectedSize, availableStock } = action.payload;
      const existingItemIndex = state.cartItems.findIndex(
        (item) => item.id === id && item.selectedSize === selectedSize
      );

      if (existingItemIndex !== -1) {
        const updatedQuantity = state.cartItems[existingItemIndex].quantity + 1;
        if (updatedQuantity <= availableStock) {
          state.cartItems[existingItemIndex].quantity = updatedQuantity;
        }
      } else {
        state.cartItems.push(action.payload);
      }

      addToLocalStorage(state.cartItems);
      notifySuccess("تمت إضافة العنصر إلى السلة");
    },

    removeItemCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) =>
          !(
            item.id === action.payload.id &&
            item.selectedSize === action.payload.size
          )
      );
      addToLocalStorage(state.cartItems);
    },
  },
});

export const {
  addItem,
  removeItemCart,
  // removeItem,
  // decreaseQuantity,
  // checkLocalStorage,
  // updateSearchTerm,
  // setLoading,
} = cartSlice.actions;
export default cartSlice.reducer;
