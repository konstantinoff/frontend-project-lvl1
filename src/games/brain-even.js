import getRandomNumber from '../../utils.js';
import createGame from '../index';

const isEven = (number) => number % 2 === 0;

const description = 'Answer "yes" if the number is even, otherwise answer "no"';

const useGameData = () => {
  const randomNumber = getRandomNumber();
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';

  return { question: randomNumber, correctAnswer };
};

export default createGame(useGameData, description);
