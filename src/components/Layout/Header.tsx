import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="header">
      <div className="inner">
        <div className="top">
          <div className="brand">
            <span className="logo" aria-hidden="true">🎓</span>
            <span className="title">Example University</span>
          </div>
          <button
            className="menuButton"
            aria-expanded={menuOpen}
            aria-controls="primary-nav"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            Menu
          </button>
            <div className="search">
              <input
                type="search"
                placeholder="Search"
                aria-label="Search"
                disabled
              />
            </div>
        </div>
        <nav
          id="primary-nav"
          className={`nav ${menuOpen ? 'open' : ''}`}
          aria-label="Primary"
        >
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/courses">Courses</NavLink>
          <NavLink to="/research">Research</NavLink>
          <NavLink to="/news">News</NavLink>
          <NavLink to="/people">People</NavLink>
          <NavLink to="/admissions">Admissions</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/portal">Student Portal</NavLink>
          <NavLink to="/staff">Staff Intranet</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
