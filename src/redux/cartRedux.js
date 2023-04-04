import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
      state.quantity += 1;
      state.total += action.payload.price * action.payload.quantity;
    },
    resetCart: (state, action) => {
      state.products = [];
      state.quantity = 0;
      state.total = 0;
    },
    removeProduct(state, action) {
      const productId = action.payload;
      const productIndex = state.products.findIndex((p) => p._id === productId);
      if (productIndex >= 0) {
        const product = state.products[productIndex];
        state.quantity -= 1;
        state.total -= product.price * product.quantity;
        state.products.splice(productIndex, 1);
      }
    },
    increaseQuantity(state, action) {
      const productId = action.payload;
      const productIndex = state.products.findIndex((p) => p._id === productId);
      if (productIndex >= 0) {
        const product = state.products[productIndex];
        product.quantity++;
        state.total += product.price;
      }
    },
    decreaseQuantity(state, action) {
      const productId = action.payload;
      const productIndex = state.products.findIndex((p) => p._id === productId);
      if (productIndex >= 0) {
        const product = state.products[productIndex];
        if (product.quantity > 1) {
          // Only decrease quantity if it is greater than 1
          product.quantity--;
          state.total -= product.price;
        }
      }
    },
  },
});

export const {
  addProduct,
  resetCart,
  increaseQuantity,
  decreaseQuantity,
  removeProduct,
} = cartSlice.actions;
export default cartSlice.reducer;
