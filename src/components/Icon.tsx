import React from 'react';
import Icons from '../img/index';
import { IIconProps } from './interfaces';

const Icon = ({ name, size }: IIconProps) => {
  const IconName = Icons[name];
  return <IconName width={size} height={size} />;
};

export default Icon;
