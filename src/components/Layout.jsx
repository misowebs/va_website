import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
    return (
        <>
        <Header />
        <main style={{ minHeight: '80vh', padding: '2rem 1rem'}}>
            <Outlet /> 
        </main>
        <Footer />
        </>
    )
}

export default Layout