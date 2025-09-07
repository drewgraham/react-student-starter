import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <nav aria-label="Footer">
      <Link to="/accessibility">Accessibility</Link>
      <Link to="/privacy">Privacy</Link>
      <Link to="/cookies">Cookies</Link>
      <Link to="/contact">Contact</Link>
    </nav>
    <p>© {new Date().getFullYear()} Example University. All rights reserved.</p>
  </footer>
);

export default Footer;
