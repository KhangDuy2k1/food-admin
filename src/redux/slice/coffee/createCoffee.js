import { createSlice } from '@reduxjs/toolkit'

const initialState = {
     isShowCreateCoffee: false,
     visibleUpdateCoffee: false,
     visibleDeleteCoffee: false,
     coffee: {
        _id: "",
        name: "",
        price: 0,
        category: "",
        volume: 0,
        desc: "",
        image: ""
     }
}
export const showOrderInfoSlice = createSlice({
  name: 'showCreateCocffee',
  initialState,
  reducers: {
    showCreateCoffee: (state) => {
        state.isShowCreateCoffee = true
    },
    notShowCreateCoffee: (state) => {
        state.isShowCreateCoffee = false
    },
    setShowUpdateCoffee: (state, action) => {
            state.visibleUpdateCoffee = action.payload
    },  
    setShowDeleteCoffee: (state, action) => {
        state.visibleDeleteCoffee = action.payload
    },
    setCoffeeId: (state, action) => {
      // console.log(action.payload)
         state.coffee._id = action.payload
    },
    setCoffee: (state, action) => {
      state.user._id = action.payload._id
      state.user.name = action.payload.name
      state.user.price = action.payload.price
      state.user.category = action.payload.category
      state.user.volume = action.payload.volume
      state.user.desc = action.payload.desc
      state.user.image = action.payload.image
    }
  },
})

// Action creators are generated for each case reducer function
export const { showCreateCoffee, notShowCreateCoffee, showUpdateCoffee, notShowUpdateCoffee,setShowDeleteCoffee, notShowDeleteCoffee, setCoffeeId, setShowUpdateCoffee, setCoffee } = showOrderInfoSlice?.actions

export default showOrderInfoSlice.reducer