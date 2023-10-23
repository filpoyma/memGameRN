export interface IGameBoardCard {
  id: string;
  imgPath: string;
  isFlipped: boolean;
  isClickable: boolean;
  matchId: string;
}

export interface IGameStatusProps {
  gameStatus: string;
}

export interface IGameProps {
  gameStatus: string;
  setGameStatus: (gameStatus: string) => void;
}

export interface ICardProps {
  card: IGameBoardCard;
  handleCardClick: (card: IGameBoardCard) => void;
}

export interface IIconProps {
  name: string;
  size: string;
}
