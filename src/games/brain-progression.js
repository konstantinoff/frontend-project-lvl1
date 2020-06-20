import getRandomNumber from '../utils.js';
import createGame from '../index.js';

const progressionLength = 10;

const createProgression = (firstElement, step, length) => {
  const progression = [];

  for (let i = 0; i < length; i += 1) {
    const previousElement = progression[i - 1];
    const currentElement = firstElement + i * step;
    progression.push(currentElement);
  }

  return progression;
};

const description = 'What number is missing in the progression?';

const getGameData = () => {
  const step = getRandomNumber();
  const firstElement = getRandomNumber();
  const progression = createProgression(firstElement, step, progressionLength);

  const hiddenElementIndex = getRandomNumber(0, progressionLength - 1);
  const correctAnswer = String(progression[hiddenElementIndex]);
  const updatedProgression = progression.slice();
  updatedProgression[hiddenElementIndex] = '..';
  const question = updatedProgression.join(' ');

  return [question, correctAnswer];
};

export default createGame(getGameData, description);
