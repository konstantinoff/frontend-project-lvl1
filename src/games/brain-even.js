import getRandomNumber from '../utils.js';
import createGame from '../index.js';

const isEven = (number) => number % 2 === 0;

const description = 'Answer "yes" if the number is even, otherwise answer "no"';

const getGameData = () => {
  const question = getRandomNumber();
  const correctAnswer = isEven(question) ? 'yes' : 'no';

  return [String(question), correctAnswer];
};

export default createGame(getGameData, description);
