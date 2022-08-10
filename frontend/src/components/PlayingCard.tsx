import React from 'react';
import Clover from '../assets/Clover.svg';
import Diamond from '../assets/Diamond.svg';
import Heart from '../assets/Heart.svg';
import Spade from '../assets/Spade.svg';

interface CardProps {
  number: string;
  suit: string;
  order: number;
}

const getSrc = (suit: string) => {
  switch (suit) {
    case 'Heart':
      return Heart;
    case 'Clover':
      return Clover;
    case 'Diamond':
      return Diamond;
    default:
      return Spade;
  }
};

const getTextColor = (suit: string) => {
  switch (suit) {
    case 'Heart':
      return 'text-red-600';
    case 'Diamond':
      return 'text-red-600';
    default:
      return 'text-black';
  }
};

export const PlayingCard: React.FC<CardProps> = ({ number, suit, order }: CardProps) => {
  return (
    <div
      className={`transform rotate-angle_${order} translate-y-custom_${order} animate-popup_${order} ${getTextColor(
        suit
      )}  origin-top bg-white py-3 px-8 rounded-lg mx-4 xl:w-48 xl:h-64 lg:w-36 lg:h-48 md:w-32 md:h-40 relative`}
    >
      <div className="xl:text-7xl lg:text-5xl md: text-4xl font-serif mb-2">{number}</div>
      <img className="xl:w-10 lg:w-8 md:w-4 ml-1" src={getSrc(suit)} alt={number} />
      <img
        className="xl:w-20 lg:w-14 md:w-8 absolute bottom-5 right-5"
        src={getSrc(suit)}
        alt={number}
      />
    </div>
  );
};
