import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'

// Page components
import Layout from './components/Layout'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import History from './pages/History'
import Scholarships from './pages/Scholarships'
import JoinUs from './pages/JoinUs'

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
        </Route>
      </Routes>
    </>
  )
}

export default App
