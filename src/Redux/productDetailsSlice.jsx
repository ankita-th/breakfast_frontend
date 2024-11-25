import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    itemDetails:[],
    productListing:[]
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
  }
}
})

export const { setItemsDetails,setProductListing } = productDetailsSlice.actions;
export const productReducer = productDetailsSlice.reducer;

// export default productDetailsSlice.reducer;
