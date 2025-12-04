import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <header className='header'>
            <div className='container'>
                <Link to="/" className='logo'>
                    <img src='/images/logos/VA_Logo.png' alt='VA Logo' className='logo-img' />
                    <span className='site-title'> Venezuelan Association at OU</span>
                </Link>

                <button className='menu-toggle' onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"}>
                    {menuOpen ? '✕' : '☰'}
                </button>

                <nav className={`nav ${menuOpen ? 'open' : ''}`}>
                    <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
                    <Link to="/about-us" onClick={() => setMenuOpen(false)}>About Us</Link>
                    <Link to="/history" onClick={() => setMenuOpen(false)}>History</Link>
                    <Link to="/scholarships" onClick={() => setMenuOpen(false)}>Scholarships</Link>
                    <Link to="/join-us" onClick={() => setMenuOpen(false)}>Join Us</Link>
                </nav>
            </div>
        </header>
    )
}

export default Header