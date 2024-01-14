import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isShowDeleteModal: false,
    isShowAddModal: false,
    isShowUpdateModal: false,
    infoStore: {
      store_id: "",
      store_name: "",
      avatar: "",
      address: "",
      phone: "",
      rate: "",
      time_open: "",
      time_close: "",
      store_type: ""
  }
}
export const storeSlice = createSlice({
  name: 'Order',
  initialState,
  reducers: {
 
    setShowDeleteModal: (state, action) => {
      state.isShowDeleteModal = action.payload
    },
    setShowAddModal: (state, action) => {
      state.isShowAddModal = action.payload
    },
    setShowUpdateModal: (state, action) => {
      state.isShowUpdateModal = action.payload
    },
    setInfoStore: (state, action) => { 
      state.infoStore = action.payload
    }
  },
})
export const { 
  setShowAddModal,
  setShowDeleteModal,
  setShowUpdateModal,
  setInfoStore
} = storeSlice?.actions

export default storeSlice.reducer;