import { Route, Routes } from 'react-router-dom'
import Auth from '../components/Auth/Auth'
import YourCourses from '../components/Dashboard/YourCourses'
import LandingPage from '../pages/LandingPage/LandingPage'

export const RoutesApp = () => {
  return (
    <Routes>
      <Route index element={<LandingPage />} />
      <Route
        path="/dashboard/your-courses"
        element={<Auth element={<YourCourses />} />}
      />
      <Route path="/popover" element={<Auth />} />
    </Routes>
  )
}
