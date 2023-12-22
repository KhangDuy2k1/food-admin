import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isShowDelete: false
}
export const showDeleteSlice = createSlice({
  name: 'showLogout',
  initialState,
  reducers: {
    setShowDelete: (state) => {
      state.isShowDelete = true
    },
    setNotShowDelete: (state) => {
      state.isShowDelete = false
    }
  },
})

// Action creators are generated for each case reducer function
export const { setShowDelete, setNotShowDelete } = showDeleteSlice?.actions

export default showDeleteSlice.reducer;