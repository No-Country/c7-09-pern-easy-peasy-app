import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
const { VITE_API_URL } = import.meta.env

export const fetchVerify = createAsyncThunk('users/fetchVerify', async () => {
  const response = await axios.get(VITE_API_URL + 'verify')
  const data = response.data

  document.cookie = `token=${data.token}; max-age=${
    60 * 30
  }; path=/; samesite=strict`

  return data
})

export const fetchLogin = createAsyncThunk('users/fetchLogin', async (info) => {
  const response = await axios.post(VITE_API_URL + 'login', {
    ...info,
  })
  const data = response.data
  document.cookie = `token=${data.token}; max-age=${
    60 * 30
  }; path=/; samesite=strict`
  console.log(data)
  return data
})

export const userSlice = createSlice({
  name: 'users',
  initialState: {
    user: {},
    courses: [],
    isLoading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    // Courses

    // User
    builder.addCase(fetchLogin.pending, (state) => {
      state.isLoading = true
    })

    builder.addCase(fetchLogin.fulfilled, (state, action) => {
      state.isLoading = false
      state.user = action.payload.user
      state.courses = action.payload.courses
    })

    builder.addCase(fetchVerify.pending, (state) => {
      state.isLoading = true
    })

    builder.addCase(fetchVerify.fulfilled, (state, action) => {
      console.log(action)
      state.isLoading = false
      state.user = action.payload.user
      state.courses = action.payload.courses
    })
  },
})

export const { setUserList } = userSlice.actions

export default userSlice.reducer
