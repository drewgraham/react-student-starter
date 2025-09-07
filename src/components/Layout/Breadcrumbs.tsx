import { Link, useLocation } from 'react-router-dom';
import './Breadcrumbs.css';

const Breadcrumbs = () => {
  const { pathname } = useLocation();
  const crumbs = pathname.split('/').filter(Boolean);
  if (crumbs.length === 0) return null;
  return (
    <nav aria-label="Breadcrumb" className="breadcrumbs">
      <ol>
        <li><Link to="/">Home</Link></li>
        {crumbs.map((crumb, idx) => {
          const url = '/' + crumbs.slice(0, idx + 1).join('/');
          const label = crumb.replace(/-/g, ' ');
          return (
            <li key={url}>
              <Link to={url}>{label}</Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
