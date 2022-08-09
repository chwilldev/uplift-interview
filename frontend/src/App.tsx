import React, { useMemo, useState } from 'react';
import winner from './assets/winner.svg';
import { DealButton } from './components/DealButton';
import { InfoBox } from './components/InfoBox';
import { PlayField } from './components/PlayField';
import { ResetButton } from './components/ResetButton';
import { useDealMutation } from './generated/graphql-types';

const App: React.FC = () => {
  const [dealMutation, { data, loading }] = useDealMutation({
    variables: {
      isInitial: false,
    },
  });

  const [cardLog, setCardLog] = useState<CardType[]>([]);

  const handleDeal = async () => {
    const receiveData = await dealMutation({
      variables: { isInitial: !cardLog.length },
    });
    setCardLog((prevCardLog) => [...prevCardLog, ...(receiveData.data?.deal?.cards as CardType[])]);
  };

  const handleReset = async () => {
    setCardLog([]);
    const receiveData = await dealMutation({
      variables: { isInitial: true },
    });
    setCardLog((prevCardLog) => [...prevCardLog, ...(receiveData.data?.deal?.cards as CardType[])]);
  };

  const remainCount = useMemo(() => 52 - cardLog.length, [cardLog]);

  const remainAces = useMemo(() => {
    let count = 0;

    cardLog.find((card) => {
      if (card.number === 'A') {
        count += 1;
      }
      return null;
    });
    return 4 - count;
  }, [cardLog]);

  return (
    <div className="bg-green-600 p-10 w-100 min-h-screen items-center relative">
      <div className="w-100 flex justify-center mt-20">
        <InfoBox title="Cards Left" count={remainCount} />
        <InfoBox title="Aces Left" count={remainAces} />
      </div>
      {!remainAces && !remainCount && (
        <div className="absolute top-48 flex justify-center w-full pr-24 animate-bounce">
          <img src={winner} alt="winner" />
        </div>
      )}
      {!loading && data ? (
        <PlayField cards={data?.deal?.cards as CardType[]} />
      ) : (
        <div className="h-320 w-96" />
      )}
      <div className="text-center mt-32">
        {!remainAces && remainCount ? (
          <p className="text-white text-3xl">You lose. Better luck next time!</p>
        ) : (
          <div />
        )}
        {remainAces ? <DealButton handleDeal={handleDeal} /> : <div />}
        <ResetButton handleReset={handleReset} content={!remainAces ? 'Play Again' : 'Reset'} />
      </div>
    </div>
  );
};

export default App;
