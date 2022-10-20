import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
const { VITE_API_URL } = import.meta.env

export const fetchYourCourses = createAsyncThunk(
  'users/fetchYourCourses',
  async () => {
    const response = await axios.get(VITE_API_URL + 'yourCourses')
    return response.data
  }
)

export const fetchLogin = createAsyncThunk('users/fetchLogin', async () => {
  const response = await axios.get(VITE_API_URL + 'users')
  return response.data
})

export const userSlice = createSlice({
  name: 'users',
  initialState: {
    user: {},
    courses: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    // Courses
    builder.addCase(fetchYourCourses.fulfilled, (state, action) => {
      state.courses = action.payload
    })

    // User
    builder.addCase(fetchLogin.fulfilled, (state, action) => {
      state.user = action.payload
    })
  },
})

export const { setUserList } = userSlice.actions

export default userSlice.reducer
