import React from 'react';
import {Text} from 'react-native';
import {Btn, BtnContainer} from '../styles/componentStyles';
import {game} from '../consts/main';

const Button = ({setGameStatus}) => {
  return (
    <BtnContainer>
      <Btn
        onPress={() => {
          setGameStatus(game.new);
        }}>
        <Text>НОВАЯ ИГРА</Text>
      </Btn>
    </BtnContainer>
  );
};

export default Button;
