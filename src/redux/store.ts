import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../redux/cart/cartSlice';
import productReducer from '../redux/product/productSlice';
import { api } from '../redux/api/apiSlice';
import useReducer from '../redux/user/userSlice';
const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
    user: useReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export default store;
