import Header from './header/Header'
import Footer from './footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
    return (
        <>
        <Header />
        <main style={{ minHeight: '80vh', padding: '1rem 1rem'}}>
            <Outlet /> 
        </main>
        <Footer />
        </>
    )
}

export default Layout