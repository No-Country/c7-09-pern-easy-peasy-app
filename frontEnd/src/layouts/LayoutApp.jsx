import Footer from '../components/Footer/Footer'
import { Header } from '../components/header/Header'
import './layoutApp.css'
export const LayoutApp = ({ children }) => {
  return (
    <div id="layoutApp">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
