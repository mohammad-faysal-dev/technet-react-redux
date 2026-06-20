import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../redux/cart/cartSlice';
import productReducer from '../redux/product/productSlice'
const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer
  },
});
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export default store;
