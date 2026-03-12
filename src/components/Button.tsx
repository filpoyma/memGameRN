import React from 'react';
import {Alert, Text} from 'react-native';
import {Btn, BtnContainer} from '../styles/componentStyles';
import {game} from '../consts/main';
import {IButtonProps} from './interfaces';

const Button = ({setGameStatus, gameStatus}: IButtonProps) => {
  return (
    <BtnContainer>
      <Btn
        onPress={() => {
          if (gameStatus === game.running) {
            Alert.alert('Start new game', 'Are you sure?', [
              {
                text: 'Cancel',
                onPress: () => {},
                style: 'cancel',
              },
              {
                text: 'OK',
                onPress: () => setGameStatus(game.new),
              },
            ]);
          } else {
            setGameStatus(game.new);
          }
        }}>
        <Text>NEW GAME</Text>
      </Btn>
    </BtnContainer>
  );
};

export default React.memo(Button);
