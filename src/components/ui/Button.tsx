import { ButtonHTMLAttributes } from 'react';
import './Button.css';

const Button = ({ className = '', ...props }: ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button className={`btn ${className}`} {...props} />
);

export default Button;
