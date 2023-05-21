import logo from '../assets/white_logo.png';
import '../styles/Navbar.css';

export function Navbar() {
  return (
    <nav className="navbar">        
            <img src={logo} alt="Logo" className="logo" />
            <span className="brand-text">Teachfy</span>
    </nav>
  );
}
