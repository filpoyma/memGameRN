import React from 'react';

import { game } from '../consts/main';
import GameBoard from './Board';
import Timer from '../components/Timer';
import Title from '../components/Title';
import Button from '../components/Button';
import { GameScreen } from '../styles/containerStyles';
import { Container } from '../styles/componentStyles';

const Game = (): JSX.Element => {
  const [gameStatus, setGameStatus] = React.useState(game.new);
  const setGameStatusHandler = (status: string) => {
    setGameStatus(status);
  };

  return (
    <GameScreen>
      <Container>
        <Title gameStatus={gameStatus} />
        {gameStatus !== game.new && <Timer gameStatus={gameStatus} />}
      </Container>
      <GameBoard gameStatus={gameStatus} setGameStatus={setGameStatusHandler} />
      <Button setGameStatus={setGameStatusHandler} />
    </GameScreen>
  );
};

export default Game;
