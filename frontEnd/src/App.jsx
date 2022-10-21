import { LayoutApp } from './layouts/LayoutApp'
import { RoutesApp } from './routes/RoutesApp'

// redux
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchVerify } from './slices/users'
import { getCookie } from './helpers/cookies'

function App() {
  const dispatch = useDispatch()

  // useEffect(() => {
  //   if (getCookie('token')) dispatch(fetchVerify())
  // }, [])

  return (
    <LayoutApp>
      <RoutesApp />
    </LayoutApp>
  )
}

export default App
