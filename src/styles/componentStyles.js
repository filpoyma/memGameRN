import styled from 'styled-components/native';
import FlipCard from 'react-native-flip-card';
import {scrWidth} from '../consts/main';

export const CardContainer = styled.View`
  margin-bottom: 10px;
  margin-horizontal: 4px;
  //border-radius: 8px;
  //background-color: lightgray;
  justify-content: center;
  align-items: center;
  width: 14%;
  height: 16%;
`;

export const FlipCardContainer = styled(FlipCard)`
  width: ${scrWidth / 6}px;
`;

export const Btn = styled.TouchableOpacity`
  border-width: 1px;
  border-color: #404040;
  letter-spacing: 30px;
  color: #404040;
  padding-vertical: 8px;
  padding-horizontal: 25px;
  border-radius: 10px;
`;

export const BtnContainer = styled.View`
  margin-top: 45px;
  margin-bottom: 10px;
  justify-content: center;
  width: 100%;
  align-self: center;
  align-content: center;
  align-items: center;
`;

export const Container = styled.Text`
  text-align: center;
  margin: 20px;
`;
