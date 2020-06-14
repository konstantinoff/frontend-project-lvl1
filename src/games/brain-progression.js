import getRandomNumber from '../utils.js';
import createGame from '../index.js';

const progressionLength = 10;

const createProgression = () => {
  const a1 = getRandomNumber();
  const d = getRandomNumber();

  const progression = [];

  progression.push(a1);

  for (let i = 1; i < progressionLength; i += 1) {
    const previousElement = progression[i - 1];
    const nextElement = previousElement + d;
    progression.push(nextElement);
  }

  return progression;
};

const hideRandomElementFromProgression = (progression) => {
  const index = getRandomNumber(0, progressionLength - 1);
  const element = String(progression[index]);
  const updatedProgression = progression.slice();
  updatedProgression[index] = '..';

  return { element, updatedProgression };
};

const description = 'What number is missing in the progression?';

const useGameData = () => {
  const progression = createProgression();
  const { element, updatedProgression } = hideRandomElementFromProgression(progression);
  const question = updatedProgression.join(' ');
  return [question, element];
};

export default createGame(useGameData, description);
