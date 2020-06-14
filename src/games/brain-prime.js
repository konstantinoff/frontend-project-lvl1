import getRandomNumber from '../utils.js';
import createGame from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
};

const fiveHundredthPrimeNumber = 3571;

const useGameData = () => {
  const number = getRandomNumber(0, fiveHundredthPrimeNumber);
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return [number, correctAnswer];
};

export default createGame(useGameData, description);
