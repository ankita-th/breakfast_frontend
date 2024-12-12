import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    itemDetails:[],
    itemQuantity : null
};

export const productDetailsSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
   setItemsDetails :(state, action) => {
    state.itemDetails = action.payload;
  },
  setItemQuantity : (state, action) => {
    state.itemQuantity = action.payload;
  }
 
}
})

export const { setItemsDetails, setItemQuantity} = productDetailsSlice.actions;
export const productReducer = productDetailsSlice.reducer;

