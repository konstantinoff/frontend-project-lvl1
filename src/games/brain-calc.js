import getRandomNumber from '../utils.js';
import createGame from '../index.js';

const mapping = {
  '*': (a, b) => a * b,
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
};

const operators = Object.keys(mapping);

const getRandomOperator = () => operators[getRandomNumber(0, operators.length - 1)];

const description = 'What is the result of the expression?';

const getGameData = () => {
  const secondNumber = getRandomNumber(0, 10);
  const firstNumber = getRandomNumber(0, 100);
  const operator = getRandomOperator();
  const question = `${firstNumber} ${operator} ${secondNumber}`;
  const correctAnswer = String(mapping[operator](firstNumber, secondNumber));
  return [question, correctAnswer];
};

export default createGame(getGameData, description);
