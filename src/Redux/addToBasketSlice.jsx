import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    
};

export const addToBasketSlice = createSlice({
  name: "basketList",
  // initialState,

  initialState: {
    items: [], // Array to store items in the basket
  },
//   reducers: {

  
// }


// const basketSlice = createSlice({
  // name: 'basket',
  // initialState: {
  //   items: [], 
  // },
  reducers: {
  },
});

// export const { addToBasket, removeFromBasket, clearBasket } = basketSlice.actions;
// export default basketSlice.reducer;







// })

export const { } = addToBasketSlice.actions;
export const addToWishListReducer = addToBasketSlice.reducer;

