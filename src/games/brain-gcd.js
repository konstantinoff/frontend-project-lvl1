import getRandomNumber from '../utils.js';
import createGame from '../index.js';

const getGCD = (a, b) => (!b ? a : getGCD(b, a % b));

const description = 'Find the greatest common divisor of given numbers.';

const useGameData = () => {
  const secondNumber = getRandomNumber();
  const firstNumber = getRandomNumber();
  const question = `${firstNumber} ${secondNumber}`;
  const correctAnswer = String(getGCD(firstNumber, secondNumber));
  return [question, correctAnswer];
};

export default createGame(useGameData, description);
