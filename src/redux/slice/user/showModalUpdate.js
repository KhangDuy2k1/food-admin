import { createSlice } from '@reduxjs/toolkit'

const initialState = {
     isShowUpdate: false
}
export const showUpdate = createSlice({
  name: 'showUpdate',
  initialState,
  reducers: {
    setShowUpdate: (state) => {
      state.isShowUpdate = true;
    },
    setNotShowUpdate: (state) => {
      state.isShowUpdate = false;
    }
  },
})

// Action creators are generated for each case reducer function
export const { setShowUpdate, setNotShowUpdate } = showUpdate?.actions;

export default showUpdate.reducer;