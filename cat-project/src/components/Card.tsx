// components/Card.tsx
import React from 'react';
import '../index'

interface CardProps {
  title: string;
  thumbnail: string;
}

const Card: React.FC<CardProps> = ({ title, thumbnail }) => {
  return (
    <div className="card">
      <img src={thumbnail} alt={title} />
      <h3>{title}</h3>
    </div>
  );
};

export default Card;
