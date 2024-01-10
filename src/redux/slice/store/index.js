import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isShowDeleteModal: false,
    infoStore: { 
        order_id: ""
    }
}
export const storeSlice = createSlice({
  name: 'Order',
  initialState,
  reducers: {
 
    setShowDeleteModal: (state, action) => {
      state.isShowDeleteModal = action.payload
    },
    setInfoStore: (state, action) => { 
      state.infoStore = action.payload
    }
  },
})
export const { 
  setShowDeleteModal,
  setInfoStore
} = storeSlice?.actions

export default storeSlice.reducer;