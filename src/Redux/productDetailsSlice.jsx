import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    itemDetails:[],
    productVariant:[]
};

export const productDetailsSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
   setItemsDetails :(state, action) => {
    state.itemDetails = action.payload;
  },
  setProductVariant:(state,action)=>{
    state.productVariant = action.payload
  }
}
})

export const { setItemsDetails,setProductVariant} = productDetailsSlice.actions;
export const productReducer = productDetailsSlice.reducer;

