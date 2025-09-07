import { ReactNode } from 'react';
import './Card.css';

interface Props {
  children: ReactNode;
}

const Card = ({ children }: Props) => <div className="card">{children}</div>;

export default Card;
