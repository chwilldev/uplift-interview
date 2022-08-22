import React from 'react';

type DealButtonProps = {
  handleDeal: () => void;
};

export const DealButton: React.FC<DealButtonProps> = ({ handleDeal }) => {
  return (
    <button
      type="button"
      className="bg-yellow-400 rounded-lg w-50 h-26 text-5xl font-bold py-3 px-6 hover:bg-yellow-600 hover:text-white font-alfa"
      onClick={handleDeal}
    >
      DEAL
    </button>
  );
};
