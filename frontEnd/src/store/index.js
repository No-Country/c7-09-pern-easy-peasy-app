import { configureStore } from '@reduxjs/toolkit'
// reducer
import users from '../slices/users'
import courses from '../slices/courses'

export default configureStore({
  reducer: {
    users,
    courses,
  },
})
