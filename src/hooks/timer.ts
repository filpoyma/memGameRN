import React from 'react';

export const useInterval = (
  callback: (durationRef: React.MutableRefObject<number>) => void,
  isNewGame: boolean,
  isGameRunning: boolean,
  duration: number,
  delay: number
) => {
  const durationRef = React.useRef(duration);
  const durationIntervalRef = React.useRef(0);

  const handler = () => {
    callback(durationRef);
  };
  React.useEffect(() => {
    if (isNewGame) durationRef.current = 0;
    const durationInterval = (isNewGame || isGameRunning) && setInterval(handler, delay);
    if (durationInterval) durationIntervalRef.current = durationInterval;
    return () => {
      if (durationInterval) clearInterval(durationInterval);
    };
  }, [delay, isNewGame, isGameRunning]);

  return durationIntervalRef;
};
