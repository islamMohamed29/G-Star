import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { notifySuccess } from "../../dependencies/Notification";

const initialState = {
  cartItems: JSON.parse(localStorage.getItem("cartData")) || [],
  searchTerm: "",
  subTotal: 0,
  tax: 0,
  totalAmount: 0,
  totalItems: 0,
};

const addToLocalStorage = (data) => {
  localStorage.setItem("cartData", JSON.stringify(data));
};

const calculateTotalAmount = (cartItems) => {
  return cartItems
    .reduce((total, item) => total + item.price * item.quantity, 0)
    .toFixed(2);
};
const calculateTax = (subtotal, taxRate = 0.15) => {
  return (subtotal * taxRate).toFixed(2);
};
const calculateTotal = (subtotal, tax) => {
  return (parseFloat(subtotal) + parseFloat(tax)).toFixed(2);
};
const calculateTotalItems = (cartItems) => {
  return cartItems.reduce((acc, item) => acc + item.quantity, 0);
};

const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const { id, selectedColor, selectedSize, availableStock } =
        action.payload;
      const existingItemIndex = state.cartItems.findIndex(
        (item) =>
          item.id === id &&
          item.selectedColor === selectedColor &&
          item.selectedSize === selectedSize
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
      state.totalItems = calculateTotalItems(state.cartItems);
      const subtotal = calculateTotalAmount(state.cartItems);
      state.subTotal = subtotal;
      const tax = calculateTax(subtotal);
      state.tax = tax;
      state.totalAmount = calculateTotal(subtotal, tax);
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
      state.totalItems = calculateTotalItems(state.cartItems);
      const subtotal = calculateTotalAmount(state.cartItems);
      state.subTotal = subtotal;
      const tax = calculateTax(subtotal);
      state.tax = tax;
      state.totalAmount = calculateTotal(subtotal, tax);
    },
    updateQuantity: (state, action) => {
      const { id, selectedSize, selectedColor, quantity } = action.payload;
      const itemIndex = state.cartItems.findIndex(
        (item) =>
          item.id === id &&
          item.selectedSize === selectedSize &&
          item.selectedColor === selectedColor
      );

      if (itemIndex !== -1) {
        state.cartItems[itemIndex].quantity = quantity;
        addToLocalStorage(state.cartItems);
        state.totalItems = calculateTotalItems(state.cartItems);
        const subtotal = calculateTotalAmount(state.cartItems);
        state.subTotal = subtotal;
        const tax = calculateTax(subtotal);
        state.tax = tax;
        state.totalAmount = calculateTotal(subtotal, tax);
      }
    },
    updateTotalAmount: (state) => {
      const subtotal = calculateTotalAmount(state.cartItems);
      state.subTotal = subtotal;

      const tax = calculateTax(subtotal);
      state.tax = tax;

      state.totalAmount = calculateTotal(subtotal, tax);
    },
    calcTotalItems: (state) => {
      state.totalItems = calculateTotalItems(state.cartItems);
    },
  },
});

export const {
  addItem,
  removeItemCart,
  updateQuantity,
  updateTotalAmount,
  calcTotalItems,
  // removeItem,
  // decreaseQuantity,
  // checkLocalStorage,
  // updateSearchTerm,
  // setLoading,
} = cartSlice.actions;
export default cartSlice.reducer;
