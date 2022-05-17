import { configureStore } from '@reduxjs/toolkit';
import AuthSlice from './features/Cart/Auth/AuthSlice';
import cartSlice from './features/Cart/cartSlice';
export default configureStore({
  reducer: {
    cart: cartSlice,
    auth: AuthSlice,
  },
});
