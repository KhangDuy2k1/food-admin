import { createSlice } from '@reduxjs/toolkit'

const initialState = {
     isShowLogout: false
}
export const showLogoutSlice = createSlice({
  name: 'showLogout',
  initialState,
  reducers: {
    setShow: (state) => {
      state.isShowLogout = true
    },
    setNotShow: (state) => {
      state.isShowLogout = false
    }
  },
})

// Action creators are generated for each case reducer function
export const { setShow, setNotShow } = showLogoutSlice?.actions

export default showLogoutSlice.reducer