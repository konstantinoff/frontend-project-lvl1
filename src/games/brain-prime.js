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

const getGameData = () => {
  const question = getRandomNumber(0, fiveHundredthPrimeNumber);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return [String(question), correctAnswer];
};

export default createGame(getGameData, description);
