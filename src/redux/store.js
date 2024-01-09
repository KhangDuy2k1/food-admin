import { configureStore } from '@reduxjs/toolkit'
import userSlice from "./slice/user"
import orderSlice  from './slice/order'
export const store = configureStore({
  reducer: {
    user: userSlice,
    order: orderSlice
  },
})