import React from 'react';

type DealButtonProp = {
  handleReset: () => void;
  content: string;
};

export const ResetButton: React.FC<DealButtonProp> = ({ handleReset, content }: DealButtonProp) => {
  return (
    <button
      type="button"
      className={`${
        content === 'Reset' ? 'absolute bottom-10 right-10' : 'mt-10'
      } bg-green-600 rounded-lg w-50 h-26 text-yellow-300 border-yellow-300 border-4 text-3xl font-bold py-2 px-4 hover:text-white hover:border-white`}
      onClick={handleReset}
    >
      {content}
    </button>
  );
};
