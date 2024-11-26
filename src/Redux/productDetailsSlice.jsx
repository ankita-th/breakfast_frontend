import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    itemDetails:[],
    productListing:[],
    productVariant:[]
};

export const productDetailsSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
   setItemsDetails :(state, action) => {
    state.itemDetails = action.payload;
  },
  setProductListing:(state,action) =>{
    state.productListing = action.payload;
  },
  setProductVariant:(state,action)=>{
    state.productVariant = action.payload
  }
}
})

export const { setItemsDetails,setProductListing,setProductVariant} = productDetailsSlice.actions;
export const productReducer = productDetailsSlice.reducer;

// export default productDetailsSlice.reducer;
