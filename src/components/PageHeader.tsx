import { ReactNode } from 'react';

interface Props {
  title: string;
  children?: ReactNode;
}

const PageHeader = ({ title, children }: Props) => (
  <header>
    <h1>{title}</h1>
    {children}
  </header>
);

export default PageHeader;
