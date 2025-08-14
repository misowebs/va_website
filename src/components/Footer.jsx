import { Link } from 'react-router-dom'
import { SITE_CONFIG } from '../constants/siteConfig'
import './Footer.css'

function Footer() {
    return (
        <footer className='footer'>
            <div className="footer-container">
                <div className="footer-left">
                    <Link to="/" className="footer-logo">
                        <img src="/images/logos/VA_Logo.png" alt="VA Logo"/>
                        <span className="footer-title">{SITE_CONFIG.title}</span>
                    </Link>
                    <p className="footer-description">{SITE_CONFIG.description}</p>
                </div>

                <div className="footer-right">
                    <div className="footer-column">
                        <h4>About</h4>
                        {SITE_CONFIG.navigation.slice(1).map(({ path, label }) => (
                            <Link key={path} to={path}>{label}</Link>
                        ))}
                    </div>

                    <div className="footer-column">
                        <h4>Social</h4>
                        <a href={SITE_CONFIG.socialLinks.facebook} target="_blank" rel="noopener noreferrer">Facebook</a>
                        <a href={SITE_CONFIG.socialLinks.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
                        <a href={SITE_CONFIG.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        <a href={SITE_CONFIG.socialLinks.tiktok} target="_blank" rel="noopener noreferrer">TikTok</a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© {new Date().getFullYear()} {SITE_CONFIG.title}, developed by Yul Castro</p>
            </div>
        </footer>
    )
}

export default Footer