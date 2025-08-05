import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
    return (
        <>
        <Navbar />
        <main style={{ minHeight: '80vh', padding: '1rem'}}>
            <Outlet /> 
        </main>
        <Footer />
        </>
    )
}

export default Layout