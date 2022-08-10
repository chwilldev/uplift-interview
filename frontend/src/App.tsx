import React, { useEffect, useMemo, useState } from 'react';
import winner from './assets/winner.svg';
import { DealButton } from './components/DealButton';
import { InfoBox } from './components/InfoBox';
import { PlayField } from './components/PlayField';
import { ResetButton } from './components/ResetButton';
import { useDealMutation, Card } from './generated/graphql-types';

const App: React.FC = () => {
  const [dealMutation, { data, loading }] = useDealMutation({
    variables: {
      isInitial: false,
    },
  });

  const [cardLog, setCardLog] = useState<Card[]>([]);

  useEffect(() => {
    if (data?.deal?.cards) {
      const cards = data?.deal.cards;
      setCardLog((prevCardLog) => {
        const sameCount = prevCardLog.reduce(
          (counter, prevCard) => counter + Number(cards.find((card) => prevCard.id === card.id)),
          0
        );
        if (!sameCount) return [...prevCardLog, ...cards];
        return prevCardLog;
      });
    }
  }, [data]);

  const handleDeal = async () => {
    await dealMutation({
      variables: { isInitial: !cardLog.length },
    });
  };

  const handleReset = async () => {
    setCardLog([]);
    await dealMutation({
      variables: { isInitial: true },
    });
  };

  const remainingCount = 52 - cardLog.length;

  const remainingAces = useMemo(() => {
    return 4 - cardLog.reduce((aceCount, card) => aceCount + Number(card.number === 'A'), 0);
  }, [cardLog]);

  return (
    <div className="bg-green-600 p-10 w-100 min-h-screen items-center relative">
      <div className="w-100 flex justify-center mt-20">
        <InfoBox title="Cards Left" count={remainingCount} />
        <InfoBox title="Aces Left" count={remainingAces} />
      </div>
      {!remainingAces && !remainingCount && (
        <div className="absolute top-48 flex justify-center w-full pr-24 animate-bounce">
          <img src={winner} alt="winner" />
        </div>
      )}
      {!loading && data ? <PlayField cards={data.deal.cards} /> : <div className="h-320 w-96" />}
      <div className="text-center mt-32">
        {!remainingAces && remainingCount ? (
          <p className="text-white text-3xl">You lose. Better luck next time!</p>
        ) : (
          <div />
        )}
        {remainingAces ? <DealButton handleDeal={handleDeal} /> : <div />}
        <ResetButton handleReset={handleReset} content={!remainingAces ? 'Play Again' : 'Reset'} />
      </div>
    </div>
  );
};

export default App;
