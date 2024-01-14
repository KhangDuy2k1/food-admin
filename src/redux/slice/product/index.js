import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isShowDeleteModal: false,
    isShowAddModal: false,
    infoProduct: {
        product_id: ""
    }
}
export const productSlice = createSlice({
  name: 'Product',
  initialState,
  reducers: {
 
    setShowDeleteModal: (state, action) => {
      state.isShowDeleteModal = action.payload
    },
    setShowAddModal: (state, action) => { 
      state.isShowAddModal = action.payload
    },
    setInfoProduct: (state, action) => {
      state.infoProduct = action.payload
    }
  },
})
export const { 
  setInfoProduct,
  setShowAddModal,
  setShowDeleteModal

} = productSlice?.actions

export default productSlice.reducer;