import { Routes, Route } from 'react-router-dom'
import ErrorBoundary from './components/common/ErrorBoundary'

// Page components
import Layout from './components/layout/Layout'
import Home from './pages/home/Home'
import AboutUs from './pages/aboutUs/AboutUs'
import History from './pages/history/History'
import Scholarships from './pages/scholarships/Scholarships'
import JoinUs from './pages/joinUs/JoinUs'
import { galleryRoutes } from './routes/galleryRoutes'  // Gallery routes - centralized configuration

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
          
          {/* Gallery routes - automatically generated from galleryRoutes */}
          {galleryRoutes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.element />}
            />
          ))}
        </Route>
      </Routes>
    </ErrorBoundary>
  )
}

export default App
