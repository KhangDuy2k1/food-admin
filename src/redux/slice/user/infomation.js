import { createSlice } from '@reduxjs/toolkit'

const initialState = {
     isShowInfo: false,
     user: {
        user_id: "",
        email: "",
        phonenumber:"",
        password: "",
        role: "user"
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
      state.user.user_id = action?.payload.user_id
    }
  },
})

// Action creators are generated for each case reducer function
export const { setShowInfo, setNotShowInfo, setInfoUser } = showInfoSlice?.actions

export default showInfoSlice.reducer