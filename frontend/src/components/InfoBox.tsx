import React from 'react';

type InfoBoxProps = {
  title: string;
  count: number;
};

export const InfoBox: React.FC<InfoBoxProps> = ({ title, count }) => {
  return (
    <div className="w-36 h-20 border border-yellow-100 bg-black text-white text-center">
      <p className="text-3xl mt-2">{count}</p>
      <p>{title}</p>
    </div>
  );
};
