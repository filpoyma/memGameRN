import { cards } from '../consts/main';
import { IGameBoardCard } from '../components/interfaces';

export const shuffle = (arr: IGameBoardCard[]) => {
  return arr
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
};

export const createBoard = (): IGameBoardCard[] =>
  [...cards, ...cards].map((card, i) => ({
    id: `id${i}`,
    imgPath: card,
    isFlipped: false,
    isClickable: true,
    matchId: i < cards.length ? `id${i + cards.length}` : `id${i - cards.length}`
  }));
