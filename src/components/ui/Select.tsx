import { SelectHTMLAttributes } from 'react';
import './Select.css';

const Select = ({ className = '', ...props }: SelectHTMLAttributes<HTMLSelectElement>) => (
  <select className={`select ${className}`} {...props} />
);

export default Select;
