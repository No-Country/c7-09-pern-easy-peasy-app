import { createSlice } from '@reduxjs/toolkit'
// axios
// import axios from 'axios'

export const userSlice = createSlice({
  name: 'users',
  initialState: {
    list: [],
  },
  reducers: {
    setUserList: (state, action) => {
      state.list = action.payload
    },
  },
})

export const { setUserList } = userSlice.actions

// está pendiente llamar los datos que estan en la DB

export default userSlice.reducer
