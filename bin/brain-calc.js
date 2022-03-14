#!/usr/bin/env node
import { output, question } from '../src/cli.js';
import * as gameMath from '../src/game/math.js';

const getOperation = () => {
  const operations = ['+', '-', '*'];
  return operations[gameMath.getRandom(0, operations.length - 1)];
};

const getCorrectAnswer = (dataArray) => {
  const [x, oper, y] = dataArray;

  switch (oper) {
    case '-':
      return +x - +y;
    case '+':
      return +x + +y;
    case '*':
      return +x + +y;
    default:
      return null;
  }
};

const calcGame = () => {
  output('Welcome to the Brain Games!');
  const name = question('May I have your name?');
  output(`Hello, ${name}!`);

  output('What is the result of the expression?');
  for (let i = 0; i < 3; i += 1) {
    const expression = [];
    expression.push(gameMath.getNumber());
    expression.push(getOperation());
    expression.push(gameMath.getNumber());

    const answer = question(`Question: ${expression.join(' ')}`);
    output(`You answer: ${answer}`);

    const correctAnswer = getCorrectAnswer(expression);
    if (+answer === correctAnswer) {
      output('Correct!');
    } else {
      output(
        `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
      );
      output("Let's try again, Sam!");
      return 0;
    }
  }

  output(`Congratulations, ${name}!`);
  return 1;
};

calcGame();

export default calcGame;
