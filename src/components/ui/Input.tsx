import { InputHTMLAttributes } from 'react';
import './Input.css';

const Input = ({ className = '', ...props }: InputHTMLAttributes<HTMLInputElement>) => (
  <input className={`input ${className}`} {...props} />
);

export default Input;
