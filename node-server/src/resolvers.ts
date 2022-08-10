import { sampleUser, cards } from './data';
import { DealResult, Card } from './generated/graphql-types';

const order: number[] = [];

const makeRand = (range: number): void => {
  while (order.length < range) {
    const r = Math.floor(Math.random() * range);
    if (order.indexOf(r) === -1) order.push(r);
  }
};

export const resolvers = {
  Query: {
    me: () => sampleUser,
  },
  Mutation: {
    deal: (_: unknown, { isInitial }: { isInitial?: boolean }): DealResult => {
      if (isInitial) {
        makeRand(52);
      }
      const currentResults = order.splice(0, order.length > 5 ? 5 : 2);
      const results: Card[] = currentResults.map((result) => {
        return cards[result] as Card;
      });
      return {
        success: true,
        cards: results,
        game: { id: '1' },
      };
    },
  },
};
