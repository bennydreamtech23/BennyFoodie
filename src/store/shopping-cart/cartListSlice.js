import {createSlice} from "@reduxjs/toolkit";

const cartListSlice = createSlice({
  name: 'cartList',
  initialState: {cartIsVisible: false},
  
  reducers:{
    toggle(state){
      state.cartIsVisible = !state.cartIsVisible
    }
      
  }   
})

export const cartListActions = cartListSlice.actions

export default cartListSlice