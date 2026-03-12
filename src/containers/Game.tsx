import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

import {game} from '../consts/main';
import GameBoard from './Board';
import Timer from '../components/Timer';
import Title from '../components/Title';
import Button from '../components/Button';
import {GameScreen} from '../styles/containerStyles';
import {Container} from '../styles/componentStyles';

const Game = () => {
  const [gameStatus, setGameStatus] = React.useState(game.new);
  const setGameStatusHandler = (status: string) => {
    setGameStatus(status);
  };

  return (
    <SafeAreaView>
      <GameScreen>
        <Container>
          <Title gameStatus={gameStatus} />
          {gameStatus !== game.new && <Timer gameStatus={gameStatus} />}
        </Container>
        <GameBoard
          gameStatus={gameStatus}
          setGameStatus={setGameStatusHandler}
        />
        <Button gameStatus={gameStatus} setGameStatus={setGameStatusHandler} />
      </GameScreen>
    </SafeAreaView>
  );
};

export default Game;
