import React from 'react';
import { Card as PlayingCard } from './PlayingCard';

type PlayFieldProps = {
  cards: CardType[];
  children?: React.ReactNode;
};

export const PlayField: React.FC<PlayFieldProps> = ({ cards }) => {
  return (
    <div>
      <div className="flex justify-center mt-16">
        {cards.length > 2
          ? cards.map((card: CardType, index: number) => (
              <PlayingCard number={card.number} suit={card.suit} order={index} key={index} />
            ))
          : cards.map((card: CardType, index: number) => (
              <PlayingCard number={card.number} suit={card.suit} order={2} key={index} />
            ))}
      </div>
    </div>
  );
};
