import getRandomNumber from '../utils.js';
import createGame from '../index.js';

const createProgression = (firstElement, step, length) => {
  const progression = [];
  progression.push(firstElement);

  for (let i = 1; i < length; i += 1) {
    const previousElement = progression[i - 1];
    const currentElement = previousElement + step;
    progression.push(currentElement);
  }

  return progression;
};

const description = 'What number is missing in the progression?';

const getGameData = () => {
  const progressionLength = 10;
  const step = getRandomNumber();
  const firstElement = getRandomNumber();
  const progression = createProgression(firstElement, step, progressionLength);

  const HiddenElementIndex = getRandomNumber(0, progressionLength - 1);
  const correctAnswer = String(progression[HiddenElementIndex]);
  const updatedProgression = progression.slice();
  updatedProgression[HiddenElementIndex] = '..';
  const question = updatedProgression.join(' ');

  return [question, correctAnswer];
};

export default createGame(getGameData, description);
