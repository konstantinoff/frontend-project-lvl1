import readlineSync from 'readline-sync';
import getUserName from './cli.js';

let correctAnswers = 0;

export default (useGameData, description) => () => {
  const userName = getUserName();

  console.log(description);

  while (correctAnswers !== 3) {
    const [question, correctAnswer] = useGameData();

    console.log(`Question: ${question}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      correctAnswers += 1;
    } else {
      correctAnswers = 0;
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}"`);
      console.log(`Let's try again, ${userName}`);
    }
  }

  console.log(`Congratulations, ${userName}`);
};
