import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
const { VITE_API_URL } = import.meta.env
// axios
// import axios from 'axios'

export const fetchAllCourses = createAsyncThunk(
  'courses/fetchAllCourses',
  async () => {
    const response = await axios.get(VITE_API_URL + 'courses')
    return response.data
  }
)

export const coursesSlice = createSlice({
  name: 'courses',
  initialState: {
    courses: [],
    isLoading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllCourses.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(fetchAllCourses.fulfilled, (state, action) => {
      state.isLoading = false
      state.courses = action.payload
    })
  },
})

export const { setUserList } = coursesSlice.actions

// está pendiente llamar los datos que estan en la DB

export default coursesSlice.reducer
