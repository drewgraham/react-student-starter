import { ReactNode } from 'react';
import './PageHeader.css';

interface Props {
  title: string;
  children?: ReactNode;
}

const PageHeader = ({ title, children }: Props) => (
  <header className="pageHeader">
    <h1>{title}</h1>
    {children}
  </header>
);

export default PageHeader;
