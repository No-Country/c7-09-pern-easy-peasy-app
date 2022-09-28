import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import LandingPage from './pages/LandingPage/LandingPage';
import Nav from './components/Nav/Nav';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>

        <Route index element={<LandingPage />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
