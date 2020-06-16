import getRandomNumber from '../utils.js';
import createGame from '../index.js';

const isEven = (number) => number % 2 === 0;

const description = 'Answer "yes" if the number is even, otherwise answer "no"';

const getGameData = () => {
  const randomNumber = getRandomNumber();
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';

  return [randomNumber, correctAnswer];
};

export default createGame(getGameData, description);
