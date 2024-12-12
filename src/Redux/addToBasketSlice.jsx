import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedBasket: {}  
};

const addToBasketSlice = createSlice({
  name: 'addToBasket',
  initialState,
  reducers: {
    setSelectedBasket: (state, action) => {
      state.selectedBasket = action.payload;
    }
  }
});

export const { setSelectedBasket } = addToBasketSlice.actions;
export const addToBasketReducer = addToBasketSlice.reducer;

