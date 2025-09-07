import { ReactNode } from 'react';
import './Tag.css';

const Tag = ({ children }: { children: ReactNode }) => (
  <span className="tag">{children}</span>
);

export default Tag;
