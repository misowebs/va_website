import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
    return (
        <footer className='footer'>
            <div className="footer-container">

                <div className="foorter-left">
                    <Link to="/" className="footer-logo">
                        <img src="/images/logos/VA_Logo.png" alt="VA Logo"/>
                        <span className="footer-title">Venezuelan Association at OU</span>
                    </Link>
                    <p className="footer-description">We are dedicated to fostering a viant community by sharing Venezuelan culture and traditions with students, faculty, and the wider community.</p>
                </div>

                <div className="footer-right">
                    <div className="footer-column">
                        <h4>About</h4>
                        <a href="/about-us">About Us</a>
                        <a href="/history">History</a>
                        <a href="/scholarships">Scholarships</a>
                        <a href="/join-us">Join Us</a>
                    </div>

                    <div className="footer-column">
                        <h4>Social</h4>
                        <a href="https://www.facebook.com/venezuelanassociation/" target="_blank" rel="noopener noreferrer">Facebook</a>
                        <a href="https://www.instagram.com/va_ou_/" target="_blank" rel="noopener noreferrer">Instagram</a>
                        <a href="https://www.linkedin.com/company/vaou/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        <a href="https://www.tiktok.com/@afv_ou" target="_blank" rel="noopener noreferrer">TikTok</a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© {new Date().getFullYear()} Venezuelan Association at OU, developed by Yul Castro</p>
            </div>
        </footer>
    )
}

export default Footer