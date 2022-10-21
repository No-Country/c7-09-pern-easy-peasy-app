import { createSlice } from '@reduxjs/toolkit'

export const modalsSlice = createSlice({
  name: 'modals',
  initialState: {
    showModalLogin: false,
    showModalRegister: false,
  },
  reducers: {
    setShowModalLogin: (state, action) => {
      if (action.payload === true || action.payload === false) {
        state.showModalLogin = action.payload
      } else {
        state.showModalLogin = !state.showModalLogin
      }
    },
    setShowModalRegister: (state, action) => {
      if (action.payload === true || action.payload === false) {
        state.showModalRegister = action.payload
      } else {
        state.showModalRegister = !state.showModalRegister
      }
    },
  },
  extraReducers: {},
})

export const { setShowModalLogin, setShowModalRegister } = modalsSlice.actions

export default modalsSlice.reducer
