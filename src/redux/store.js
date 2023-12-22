import { configureStore } from '@reduxjs/toolkit'
import showLogoutSlice from "./slice/user/showModalLogout"
import  showUpdateSlice  from './slice/user/showModalUpdate'
import showDeleteSlice from "./slice/user/delete"
import showInfoSlice  from './slice/user/infomation'
import  showOrderInfoSlice  from './slice/order/InfoOrder'
import showCreateCoffeeSlice from './slice/coffee/createCoffee'
export const store = configureStore({
  reducer: {
    showLogout: showLogoutSlice,  
    showUpdate : showUpdateSlice,
    showDelete: showDeleteSlice,
    showInfo: showInfoSlice,
    showOrderInfo: showOrderInfoSlice,
    showCreateCoffee:showCreateCoffeeSlice
  },
})