import { output, question } from '../cli.js';

export const greetingsGame = () => {
  output('Welcome to the Brain Games!');
  const name = question('May I have your name?');
  output(`Hello, ${name}!`);
  return name;
};

export const getAnswer = (expression) => {
  output(`Question: ${expression.join(' ')}`);
  return question('You answer: ');
};

export const correctAnswer = () => {
  output('Correct!');
};

export const incorrectAnswer = (rightAnswer, wrongAnswer) => {
  output(`'${wrongAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
};

export const getGameResultObject = (wrongAnswer, rightAnswer) => ({
  wrongAnswer,
  rightAnswer,
  status: wrongAnswer === rightAnswer ? 1 : 0,
});

export const endGame = (gameResult, name) => {
  if (gameResult === 1) {
    output(`Congratulations, ${name}!`);
  } else {
    output(`Let's try again, ${name}!`);
  }
};

export const startGame = (gameFunction, name) => {
  for (let i = 0; i < 3; i += 1) {
    const result = gameFunction(name);
    if (result.status === 1) {
      correctAnswer();
    } else {
      incorrectAnswer(result.wrongAnswer, result.rightAnswer, name);
      return 0;
    }
  }

  return 1;
};

export const runGame = (gameFunction) => {
  const name = greetingsGame();
  const gameResult = startGame(gameFunction, name);
  endGame(gameResult, name);
};
