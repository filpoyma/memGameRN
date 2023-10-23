import React from 'react';
import Card from '../components/Card';

import { game, delayFlipBackFirstCard, delayToFlipBackPairs } from '../consts/main';
import { shuffle, createBoard } from '../functs/main';

import { Board } from '../styles/containerStyles';
import { IGameProps } from '../components/interfaces';
import { IGameBoardCard } from '../components/interfaces';

const gameBoard = createBoard();

const GameBoard = ({ gameStatus, setGameStatus }: IGameProps) => {
  const [board, setBoard] = React.useState<IGameBoardCard[]>(shuffle(gameBoard));
  const [matchedPairs, setMatchedPairs] = React.useState<number>(0);
  const [firstCard, setFirstCard] = React.useState<null | IGameBoardCard>(null);
  const timerIdFirstCard = React.useRef(0);

  React.useEffect(() => {
    if (matchedPairs === board.length / 2) setGameStatus(game.end);
  }, [matchedPairs]);

  React.useEffect(() => {
    if (gameStatus === game.new) {
      setBoard(shuffle(gameBoard));
      setMatchedPairs(0);
      setFirstCard(null);
    }
  }, [gameStatus]);

  const handleCardClick = (currentCard: IGameBoardCard) => {
    setGameStatus(game.running);

    // переворачиваем карточку
    setBoard((prev) => {
      return prev.map((card) =>
        card.id === currentCard.id ? { ...card, isFlipped: true, isClickable: false } : card
      );
    });

    // переворачиваем первую карту
    if (firstCard === null) {
      setFirstCard({ ...currentCard });

      // первая карта будет открыта 5 сек
      timerIdFirstCard.current = setTimeout(() => {
        setBoard((prev) =>
          prev.map((card) =>
            card.id === currentCard.id ? { ...card, isFlipped: false, isClickable: true } : card
          )
        );
        setFirstCard(null);
      }, delayFlipBackFirstCard);
      return;
    }
    clearInterval(timerIdFirstCard.current);

    // если карты совпали
    if (firstCard.matchId === currentCard.id) {
      setMatchedPairs((prev) => prev + 1);
      setBoard((prev) =>
        prev.map((card) =>
          card.id === firstCard.id || card.id === currentCard.id
            ? { ...card, isClickable: false }
            : card
        )
      );
      setFirstCard(null);
    } else {
      // если карты не совпали - ждем 1 сек и закрываем
      setTimeout(() => {
        setBoard((prev) =>
          prev.map((card) =>
            card.id === firstCard.id || card.id === currentCard.id
              ? { ...card, isFlipped: false, isClickable: true }
              : card
          )
        );
      }, delayToFlipBackPairs);
    }

    setFirstCard(null);
  };

  return (
    <Board>
      {board.map((card) => (
        <Card key={card.id} card={card} handleCardClick={handleCardClick} />
      ))}
    </Board>
  );
};

export default GameBoard;
