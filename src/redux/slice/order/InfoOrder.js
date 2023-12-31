import { createSlice } from '@reduxjs/toolkit'

const initialState = {
     isShowDelete: false,
     user: {
        order_id: "",
        store_name:"",
        phone: "",
        address: "",
        total_price: "",
        status: ""
     }
}
export const showOrderInfoSlice = createSlice({
  name: 'showOrderInfo',
  initialState,
  reducers: {
    setShowDeleteOrder: (state, action) => {
      state.isShowDelete = action.payload
    },
    setOrderInfo: (state, action) => {
      state.user = action?.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setShowDeleteOrder, setNotShowOrderInfo, setOrderInfo } = showOrderInfoSlice?.actions

export default showOrderInfoSlice.reducer