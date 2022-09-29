import { LayoutApp } from './layouts/LayoutApp'
import { RoutesApp } from './routes/RoutesApp'

// redux
import { Provider } from 'react-redux'
import store from './Store'

function App() {
  return (
    <Provider store={store}>
      <LayoutApp>
        <RoutesApp />
      </LayoutApp>
    </Provider>
  )
}

export default App
