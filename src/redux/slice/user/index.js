import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    logoutShowModal: false,
    isShowResetModal: false,
    isShowDeleteModal: false,
    infoUser: { 
      user_id: "",
      username: "",
      email: "",
      fullname: "",
      gender: "",
      phone: "",
      address: ""
    }
}
export const userSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {
    setShowResetModal: (state, action) => { 
          state.isShowResetModal = action.payload
    },
    setShowDeleteModal: (state, action) => {
      state.isShowDeleteModal = action.payload
    },
    setInfoUser: (state, action) => { 
           state.infoUser = action.payload
    },
    setLogoutModal: (state, action) => {
            state.logoutShowModal = action.payload
    }
  },
})
export const { 
  setShowDeleteModal,
  setShowResetModal,
  setInfoUser,
  setLogoutModal 
} = userSlice?.actions

export default userSlice.reducer;