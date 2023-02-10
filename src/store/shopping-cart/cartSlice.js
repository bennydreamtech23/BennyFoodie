import {createSlice} from "@reduxjs/toolkit";
const initialState = {
  cartItem: [],
  totalQuantity: 0,
  totalAmount: 0,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  
  reducer:{
    addItem(state, action){
      const newItem = action.payload
      const existingItem = state.cartItem.find(item => item.id === newItem.id)
      state.totalQuantity++
      
      if(!existingItem){
        state.cartItem.push({
          id: newItem.id,
          title: newItem.title,
          image: newItem.image,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price
        })
      }
      else{
        existingItem.quantity++
        existingItem.totalPrice = Number(existingItem.totalPrice) + Number(newItem.price)
      }
      state.totalAmount = state.cartItems.reduce((total, item) => (total + Number(item.price) * Number(item.quantity)
      ))
    }
  }
})

export const cartActions = cartSlice.cartActions

export default cartSlice