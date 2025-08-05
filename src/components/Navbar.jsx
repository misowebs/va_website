import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
    return(
        <nav className="navbar">
            <ul className="nav-list">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about-us">About Us</Link></li>
                <li><Link to="/history">History</Link></li>
                <li><Link to="/scholarships">Scholarships</Link></li>
                <li><Link to="/join-us">Join US</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar