import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'Cart',
  initialState,
  reducers: {
    addItem: (state, { payload }) => {
      state.items.push(payload);
      localStorage.setItem('Cart', JSON.stringify(state.items));
    },
    loadCart: (state, { payload }) => {
      return {
        items: payload,
      };
    },
    increaseQuantity: (state, { payload }) => {
      const i = state.items.findIndex((item) => item.id == payload);
      state.items[i].quantity++;
      localStorage.setItem('Cart', JSON.stringify(state.items));
    },
    decreseQuantity: (state, { payload }) => {
      const i = state.items.findIndex((item) => item.id == payload);
      state.items[i].quantity--;
      localStorage.setItem('Cart', JSON.stringify(state.items));
    },
    removeItem: (state, { payload }) => {
      const i = state.items.findIndex((item) => item.id == payload);
      state.items.splice(i, 1);
      localStorage.setItem('Cart', JSON.stringify(state.items));
    },
  },
});
export const {
  addItem,
  loadCart,
  increaseQuantity,
  decreseQuantity,
  removeItem,
} = cartSlice.actions;
export default cartSlice.reducer;
