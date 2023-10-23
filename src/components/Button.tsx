import React from 'react';
import { Text } from 'react-native';
import { Btn, BtnContainer } from '../styles/componentStyles';
import { game } from '../consts/main';
import { IButtonProps } from "./interfaces";

const Button = ({ setGameStatus } : IButtonProps) => {
  return (
    <BtnContainer>
      <Btn
        onPress={() => {
          setGameStatus(game.new);
        }}
      >
        <Text>NEW GAME</Text>
      </Btn>
    </BtnContainer>
  );
};

export default Button;
