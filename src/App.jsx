import { Routes, Route } from 'react-router-dom'
import ErrorBoundary from './components/common/ErrorBoundary'

// Page components
import Layout from './components/layout/Layout'
import Home from './pages/home/Home'
import AboutUs from './pages/aboutUs/AboutUs'
import History from './pages/history/History'
import Scholarships from './pages/scholarships/Scholarships'
import JoinUs from './pages/joinUs/JoinUs'
import FeriaDeLaChinita2004 from './pages/history/galleries/2004/FeriaDeLaChinita2004'

function App() {
  return (
    <ErrorBoundary>
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
    </ErrorBoundary>
  )
}

export default App
