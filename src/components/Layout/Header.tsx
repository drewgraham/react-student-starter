import { useState, FormEvent } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setQuery } from '../../store/searchSlice';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setLocalQuery] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(setQuery(query));
    navigate(`/search?q=${encodeURIComponent(query)}`);
  };
  return (
    <header className="header">
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
        <form className="search" role="search" onSubmit={handleSubmit}>
          <label className="visually-hidden" htmlFor="global-search">
            Search
          </label>
          <input
            id="global-search"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={query}
            onChange={e => setLocalQuery(e.target.value)}
          />
        </form>
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
    </header>
  );
};

export default Header;
