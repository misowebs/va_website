import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'

// Page components
import Layout from './components/Layout'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import History from './pages/History'
import Scholarships from './pages/Scholarships'
import JoinUs from './pages/JoinUs'
import FeriaDeLaChinita2004 from './pages/Gallery/JSX-Files/FeriaDeLaChinita2004'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/history" element={<History />} />
          <Route path="/scholarships" element={<Scholarships />} />
          <Route path="/join-us" element={<JoinUs />} />
          <Route path="/2004FeriaDeLaChinita" element={<FeriaDeLaChinita2004 />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
