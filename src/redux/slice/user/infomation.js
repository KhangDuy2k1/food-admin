import { createSlice } from '@reduxjs/toolkit'

const initialState = {
     isShowInfo: false,
     user: {
         user_id: "",
         username: "",
         email: "",
         fullname: "",
         gender: "",
         phone: "",
         address: ""
     }
}
export const showInfoSlice = createSlice({
  name: 'showInfo',
  initialState,
  reducers: {
    setShowInfo: (state) => {
      state.isShowInfo = true
    },
    setNotShowInfo: (state) => {
      state.isShowInfo = false
    },
    setInfoUser: (state, action) => {
      state.user = action?.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setShowInfo, setNotShowInfo, setInfoUser } = showInfoSlice?.actions

export default showInfoSlice.reducer