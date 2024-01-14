import { configureStore } from '@reduxjs/toolkit'
import userSlice from "./slice/user"
import orderSlice  from './slice/order'
import storeSlice from "./slice/store"
import productSlice from "./slice/product"
export const store = configureStore({
  reducer: {
    user: userSlice,
    order: orderSlice,
    store: storeSlice,
    product: productSlice
  },
})