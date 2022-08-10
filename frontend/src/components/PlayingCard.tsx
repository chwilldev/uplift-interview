import React from 'react';
import Clover from '../assets/Clover.svg';
import Diamond from '../assets/Diamond.svg';
import Heart from '../assets/Heart.svg';
import Spade from '../assets/Spade.svg';
import { Suit } from '../generated/graphql-types';

interface PlayingCardProps {
  number: string;
  suit: Suit;
  order: number;
}

const getSuitSourceURL = (suit: Suit) => {
  switch (suit) {
    case Suit.Heart:
      return Heart;
    case Suit.Clover:
      return Clover;
    case Suit.Diamond:
      return Diamond;
    default:
      return Spade;
  }
};

const getTextColor = (suit: Suit) => {
  switch (suit) {
    case Suit.Heart:
      return 'text-red-600';
    case Suit.Diamond:
      return 'text-red-600';
    default:
      return 'text-black';
  }
};

export const PlayingCard: React.FC<PlayingCardProps> = ({
  number,
  suit,
  order,
}: PlayingCardProps) => {
  return (
    <div
      className={`transform rotate-angle_${order} translate-y-custom_${order} animate-popup_${order} ${getTextColor(
        suit
      )}  origin-top bg-white py-3 px-8 rounded-lg mx-4 xl:w-48 xl:h-64 lg:w-36 lg:h-48 md:w-32 md:h-40 relative`}
    >
      <div className="xl:text-6xl lg:text-5xl md: text-4xl font-serif mb-2 font-alfa">{number}</div>
      <img className="xl:w-10 lg:w-8 md:w-4 ml-1" src={getSuitSourceURL(suit)} alt={number} />
      <img
        className="xl:w-20 lg:w-14 md:w-8 absolute bottom-5 right-5"
        src={getSuitSourceURL(suit)}
        alt={number}
      />
    </div>
  );
};
