import React from 'react';

import {game} from '../consts/main';
import GameBoard from './Board';
import Timer from '../components/Timer';
import Title from '../components/Title';
import Button from '../components/Button';
import {GameScreen} from '../styles/containerStyles';

const Game = () => {
  const [gameStatus, setGameStatus] = React.useState(game.ready);

  const setGameStatusHandler = status => {
    setGameStatus(status);
  };

  return (
    <GameScreen>
      {gameStatus === game.running ? (
        <Timer gameStatus={gameStatus} />
      ) : (
        <Title gameStatus={gameStatus} />
      )}
      <GameBoard gameStatus={gameStatus} setGameStatus={setGameStatusHandler} />
      <Button setGameStatus={setGameStatusHandler} />
    </GameScreen>
  );
};

export default Game;
