import React from 'react';

import { CardContainer, FlipCardContainer } from '../styles/componentStyles';
import Icon from './Icon';
import { backCard } from '../consts/main';
import { View } from 'react-native';
import { ICardProps } from './interfaces';

const Card = ({ card, handleCardClick }: ICardProps) => {
  return (
    <CardContainer>
      <FlipCardContainer
        friction={12}
        perspective={500}
        flipHorizontal={true}
        flipVertical={false}
        useNativeDriver={true}
        flip={!card.isFlipped}
        clickable={card.isClickable}
      >
        <View>
          <Icon name={card.imgPath} size={'100%'} />
        </View>
        <View
          onResponderRelease={() => {
            handleCardClick(card);
          }}
          onStartShouldSetResponder={() => true}
        >
          <Icon name={backCard} size={'100%'} />
        </View>
      </FlipCardContainer>
    </CardContainer>
  );
};

export default Card;
