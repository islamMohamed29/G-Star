// import { createSlice } from "@reduxjs/toolkit";
// import Resources from "../../locales/Resources.json";

// import { notifySuccess } from "../../dependencies/Notification";
// let currentLanguage = localStorage.getItem("language")
//   ? localStorage.getItem("language")
//   : "en";
// const initialState = {
//   cartItems: JSON.parse(localStorage.getItem("cartData")) || [],
//   searchTerm: "",
//   subTotal: 0,
//   tax: 0,
//   totalAmount: 0,
//   totalItems: 0,
// };

// const addToLocalStorage = (data) => {
//   localStorage.setItem("cartData", JSON.stringify(data));
// };

// const calculateTotalAmount = (cartItems) => {
//   return cartItems
//     .reduce((total, item) => total + item.price * item.quantity, 0)
//     .toFixed(2);
// };
// const calculateTax = (subtotal, taxRate = 0.15) => {
//   return (subtotal * taxRate).toFixed(2);
// };
// const calculateTotal = (subtotal, tax) => {
//   return (parseFloat(subtotal) + parseFloat(tax)).toFixed(2);
// };
// const calculateTotalItems = (cartItems) => {
//   return cartItems.reduce((acc, item) => acc + item.quantity, 0);
// };

// const cartSlice = createSlice({
//   name: "cartSlice",
//   initialState,
//   reducers: {
//     addItem: (state, action) => {
//       const { id, selectedColor, selectedSize, availableStock } =
//         action.payload;
//       const existingItemIndex = state.cartItems.findIndex(
//         (item) =>
//           item.id === id &&
//           item.selectedColor === selectedColor &&
//           item.selectedSize === selectedSize
//       );

//       if (existingItemIndex !== -1) {
//         const updatedQuantity = state.cartItems[existingItemIndex].quantity + 1;
//         if (updatedQuantity <= availableStock) {
//           state.cartItems[existingItemIndex].quantity = updatedQuantity;
//         }
//       } else {
//         state.cartItems.push(action.payload);
//         notifySuccess(Resources["addedToCart"][currentLanguage]);
//       }

//       addToLocalStorage(state.cartItems);
//       state.totalItems = calculateTotalItems(state.cartItems);
//       const subtotal = calculateTotalAmount(state.cartItems);
//       state.subTotal = subtotal;
//       const tax = calculateTax(subtotal);
//       state.tax = tax;
//       state.totalAmount = calculateTotal(subtotal, tax);
//     },

//     removeItemCart: (state, action) => {
//       state.cartItems = state.cartItems.filter(
//         (item) =>
//           !(
//             item.id === action.payload.id &&
//             item.selectedSize === action.payload.size
//           )
//       );
//       addToLocalStorage(state.cartItems);
//       state.totalItems = calculateTotalItems(state.cartItems);
//       const subtotal = calculateTotalAmount(state.cartItems);
//       state.subTotal = subtotal;
//       const tax = calculateTax(subtotal);
//       state.tax = tax;
//       state.totalAmount = calculateTotal(subtotal, tax);
//     },
//     updateQuantity: (state, action) => {
//       const { id, selectedSize, selectedColor, quantity } = action.payload;
//       const itemIndex = state.cartItems.findIndex(
//         (item) =>
//           item.id === id &&
//           item.selectedSize === selectedSize &&
//           item.selectedColor === selectedColor
//       );

//       if (itemIndex !== -1) {
//         state.cartItems[itemIndex].quantity = quantity;
//         addToLocalStorage(state.cartItems);
//         state.totalItems = calculateTotalItems(state.cartItems);
//         const subtotal = calculateTotalAmount(state.cartItems);
//         state.subTotal = subtotal;
//         const tax = calculateTax(subtotal);
//         state.tax = tax;
//         state.totalAmount = calculateTotal(subtotal, tax);
//       }
//     },
//     updateTotalAmount: (state) => {
//       const subtotal = calculateTotalAmount(state.cartItems);
//       state.subTotal = subtotal;

//       const tax = calculateTax(subtotal);
//       state.tax = tax;

//       state.totalAmount = calculateTotal(subtotal, tax);
//     },
//     calcTotalItems: (state) => {
//       state.totalItems = calculateTotalItems(state.cartItems);
//     },
//     clearCart: (state) => {
//       state.cartItems = [];
//       state.subTotal = 0;
//       state.tax = 0;
//       state.totalAmount = 0;
//       state.totalItems = 0;
//     },
//   },
// });

// export const {
//   addItem,
//   removeItemCart,
//   updateQuantity,
//   updateTotalAmount,
//   calcTotalItems,
//   clearCart,
//   // removeItem,
//   // decreaseQuantity,
//   // checkLocalStorage,
//   // updateSearchTerm,
//   // setLoading,
// } = cartSlice.actions;
// export default cartSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";
import Resources from "../../locales/Resources.json";
import { notifySuccess } from "../../dependencies/Notification";

let currentLanguage = localStorage.getItem("language")
  ? localStorage.getItem("language")
  : "en";

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
      const {
        id,
        selectedColor,
        selectedSize,
        selectedWaist,
        selectedLength,
        availableStock,
      } = action.payload;

      // التحقق مما إذا كان المنتج بناطيل أم لا
      const isPants = selectedWaist && selectedLength;

      // تحديد المفاتيح للبحث عن العناصر الموجودة
      const searchCriteria = isPants
        ? (item) =>
            item.id === id &&
            item.selectedColor === selectedColor &&
            item.selectedWaist === selectedWaist &&
            item.selectedLength === selectedLength
        : (item) =>
            item.id === id &&
            item.selectedColor === selectedColor &&
            item.selectedSize === selectedSize;

      // البحث عن العنصر الموجود
      const existingItemIndex = state.cartItems.findIndex(searchCriteria);

      if (existingItemIndex !== -1) {
        // إذا كان العنصر موجود بالفعل
        const updatedQuantity = state.cartItems[existingItemIndex].quantity + 1;
        if (updatedQuantity <= availableStock) {
          state.cartItems[existingItemIndex].quantity = updatedQuantity;
        }
      } else {
        // إضافة عنصر جديد
        state.cartItems.push(action.payload);
        notifySuccess(Resources["addedToCart"][currentLanguage]);
      }

      // تحديث التخزين المحلي والحسابات
      addToLocalStorage(state.cartItems);
      state.totalItems = calculateTotalItems(state.cartItems);
      const subtotal = calculateTotalAmount(state.cartItems);
      state.subTotal = subtotal;
      const tax = calculateTax(subtotal);
      state.tax = tax;
      state.totalAmount = calculateTotal(subtotal, tax);
    },

    removeItemCart: (state, action) => {
      const isPants = action.payload.waist && action.payload.length;

      state.cartItems = state.cartItems.filter((item) =>
        isPants
          ? !(
              item.id === action.payload.id &&
              item.selectedWaist === action.payload.waist &&
              item.selectedLength === action.payload.length &&
              item.selectedColor === action.payload.color
            )
          : !(
              item.id === action.payload.id &&
              item.selectedSize === action.payload.size &&
              item.selectedColor === action.payload.color
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
      const {
        id,
        selectedSize,
        selectedColor,
        quantity,
        selectedWaist,
        selectedLength,
      } = action.payload;

      const isPants = selectedWaist && selectedLength;

      const itemIndex = state.cartItems.findIndex(
        isPants
          ? (item) =>
              item.id === id &&
              item.selectedWaist === selectedWaist &&
              item.selectedLength === selectedLength &&
              item.selectedColor === selectedColor
          : (item) =>
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

    clearCart: (state) => {
      state.cartItems = [];
      state.subTotal = 0;
      state.tax = 0;
      state.totalAmount = 0;
      state.totalItems = 0;
      addToLocalStorage([]);
    },
  },
});

export const {
  addItem,
  removeItemCart,
  updateQuantity,
  updateTotalAmount,
  calcTotalItems,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
