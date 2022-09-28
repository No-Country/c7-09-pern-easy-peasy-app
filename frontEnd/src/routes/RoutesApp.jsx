import { Route, Routes } from 'react-router-dom'
import LandingPage from '../pages/LandingPage/LandingPage'

export const RoutesApp = () => {
  return (
    <Routes>
      <Route index element={<LandingPage />} />/
    </Routes>
  )
}
