import {configureStore} from "@reduxjs/toolkit";
import cartSlice from "./shopping-cart/cartSlice.js";
import cartListSlice from "./shopping-cart/cartListSlice.js";
const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    cartList: cartListSlice.reducer,
  },
})

export default store;