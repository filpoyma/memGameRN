import React from 'react';
import treat from './treat-icon.svg';
import dolphin from './dolphin-icon.svg';
import bear from './bear-icon.svg';
import birds from './birds-icon.svg';
import bull from './bull-icon.svg';
import bunny from './bunny-icon.svg';
import cats from './cats-icon.svg';
import cow from './cow-icon.svg';
import elephant from './elephant-icon.svg';
import ghosts from './ghosts-icon.svg';
import moose from './moose-icon.svg';
import owls from './owls-icon.svg';
import pig from './pig-icon.svg';
import rabbit from './rabbit-icon.svg';
import shark from './shark-icon.svg';
import skull from './skull-icon.svg';
import tiger from './tiger-icon.svg';
import unicorn from './unicorn-icon.svg';
import wolf from './wolf-icon.svg';
import { SvgProps } from 'react-native-svg';

interface IIcons {
  [index: string]: React.FC<SvgProps>;
}

const Icons: IIcons = {
  treat,
  dolphin,
  bunny,
  elephant,
  rabbit,
  cow,
  bull,
  bear,
  tiger,
  wolf,
  moose,
  pig,
  shark,
  skull,
  owls,
  ghosts,
  cats,
  birds,
  unicorn
};

export default Icons;
