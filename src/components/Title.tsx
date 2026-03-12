import React from 'react';
import { game } from '../consts/main';
import { Text } from 'react-native';
import { IGameStatusProps } from './interfaces';

const Title = ({ gameStatus }: IGameStatusProps) => {
  const title = (gameStatus: string) => {
    switch (gameStatus) {
      case game.ready:
      case game.new:
        return 'Click any card for start ';
      case game.running:
        return '';
      case game.end:
        return 'Game Over in ';
    }
  };
  return <Text>{title(gameStatus)}</Text>;
};

export default Title;
