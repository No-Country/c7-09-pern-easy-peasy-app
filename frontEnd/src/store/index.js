import { configureStore } from '@reduxjs/toolkit'
// reducer
import users from '../slices/users'
import courses from '../slices/courses'
import modals from '../slices/modals'

export default configureStore({
  reducer: {
    users,
    courses,
    modals,
  },
})
