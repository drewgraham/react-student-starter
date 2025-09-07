import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import Breadcrumbs from './Breadcrumbs';
import '../../styles/global.css';

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => (
  <div className="layout">
    <a href="#main" className="skip-link">Skip to content</a>
    <Header />
    <Breadcrumbs />
    <main id="main">{children}</main>
    <Footer />
  </div>
);

export default Layout;
