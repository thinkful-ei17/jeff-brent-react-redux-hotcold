export const SUBMIT_GUESS = 'SUBMIT_GUESS';
export const submitGuess = guess => ({
  guess,
  type: SUBMIT_GUESS,
});

export const NEW_GAME = 'NEW_GAME';
export const newGame = () => ({ type: NEW_GAME });
// action creator
