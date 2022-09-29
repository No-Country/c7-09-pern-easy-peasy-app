import Footer from '../components/Footer/Footer'
import { Header } from '../components/header/Header'
import layoutStyle from './layoutApp.module.css'

export const LayoutApp = ({ children }) => {
  return (
    <div className={layoutStyle.layoutApp}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
