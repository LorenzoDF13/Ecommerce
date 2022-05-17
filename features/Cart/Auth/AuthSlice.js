import { createSlice } from '@reduxjs/toolkit';
const initialState = { isLoading: true };
const authSlice = createSlice({
  name: 'Auth',
  initialState,
  reducers: {
    setAuth: (state, { payload }) => payload,
  },
});
export const { setAuth } = authSlice.actions;
export default authSlice.reducer;
