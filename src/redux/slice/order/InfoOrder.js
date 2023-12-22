import { createSlice } from '@reduxjs/toolkit'

const initialState = {
     isShowOrderInfo: false,
     user: {
        email: "",
        phonenumber:"",
     }
}
export const showOrderInfoSlice = createSlice({
  name: 'showOrderInfo',
  initialState,
  reducers: {
    setShowOrderInfo: (state) => {
      state.isShowOrderInfo = true
    },
    setNotShowOrderInfo: (state) => {
      state.isShowOrderInfo = false
    },
    setOrderInfo: (state, action) => {
      state.user = action?.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setShowOrderInfo, setNotShowOrderInfo, setOrderInfo } = showOrderInfoSlice?.actions

export default showOrderInfoSlice.reducer