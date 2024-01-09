import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isShowUpdateOrderModal: false,
    infoOrder: { 
      id: "",
      address: "",
      phone: "",
      status: ""
    }
}
const orderSlice = createSlice({
  name: 'Order',
  initialState,
  reducers: {
    setShowUpdateOrder: (state, action) => { 
          state.isShowUpdateOrderModal = action.payload
    },
    setInfoOrder: (state, action) => { 
          state.infoOrder = action.payload
    }
  },
})
export const { 
    setShowUpdateOrder,
    setInfoOrder
} = orderSlice?.actions

export default orderSlice.reducer;