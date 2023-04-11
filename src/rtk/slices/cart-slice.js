import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  initialState: [],
  name: "cartSlice",
  reducers: {
    addToCart: (state, action) => {
      const isFound = state.find((product) => product.id === action.payload.id)
      if (isFound) {
        isFound.quantity += 1        
      } else {
        const cloneProduct = {...action.payload, quantity: 1}
        cloneProduct.quantity = 1
        state.push(cloneProduct)
      }
    },
    deleteFromCart: (state, action) => {
      return state.filter((product) => product.id != action.payload.id)
    },
    clear: (state, action) => {
      return []
    },
  },
});

export const {addToCart,deleteFromCart,clear} = cartSlice.actions
export default cartSlice.reducer