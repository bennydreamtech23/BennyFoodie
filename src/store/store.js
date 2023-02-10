import {configureStore} from "@reduxjs/toolkit";
import cartSlice from "./shopping-cart/cartSlice.js";

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer
  },
})

export default store;