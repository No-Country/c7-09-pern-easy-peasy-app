import { Route, Routes } from 'react-router-dom'
import YourCourses from '../components/Dashboard/YourCourses'
import LandingPage from '../pages/LandingPage/LandingPage'

export const RoutesApp = () => {
  return (
    <Routes>
      <Route index element={<LandingPage />} />
      <Route path="/dashboard/your-courses" element={<YourCourses />} />
    </Routes>
  )
}
