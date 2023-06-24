import React from 'react';
import Icons from '../img/index';

const Icon = ({name, color, size}) => {
  const IconName = Icons[name];
  return <IconName width={size} height={size} />;
};

export default Icon;
