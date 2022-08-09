import React from 'react';

type DealButtonProp = {
  handleDeal: () => void;
};

export const DealButton = ({ handleDeal }: DealButtonProp) => {
  return (
    <button
      type="button"
      className="bg-yellow-400 rounded-lg w-50 h-26 text-5xl font-bold py-3 px-6 hover:bg-yellow-600 hover:text-white"
      onClick={handleDeal}
    >
      DEAL
    </button>
  );
};
