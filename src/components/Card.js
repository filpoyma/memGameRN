import React from 'react';
import PropTypes from 'prop-types';

import { CardContainer, FlipCardContainer } from '../styles/componentStyles';
import Icon from './Icon';
import { backCard } from '../consts/main';
import { View } from 'react-native';

const Card = ({ card, handleCardClick }) => {
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
        <View onStartShouldSetResponder={() => handleCardClick(card)}>
          <Icon name={backCard} size={'100%'} />
        </View>
      </FlipCardContainer>
    </CardContainer>
  );
};

Card.propTypes = {
  card: PropTypes.shape({
    id: PropTypes.string,
    isFlipped: PropTypes.bool,
    isClickable: PropTypes.bool,
    matchId: PropTypes.string,
    handleCardClick: PropTypes.func
  })
};

export default Card;
