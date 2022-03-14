#!/usr/bin/env node
import { output, question } from '../src/cli.js';
import * as gameMath from '../src/game/math.js';
import * as gameGeneral from '../src/game/general.js';

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

const baseGameFunction = (name) => {
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
    output(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    output(`Let's try again, ${name}!`);
    return 0;
  }

  return 1;
};

const main = () => {
  const name = gameGeneral.greetingsGame();
  output('What is the result of the expression?');
  const gameResult = gameGeneral.startGame(baseGameFunction, name);
  if (gameResult === 1) output(`Congratulations, ${name}!`);
};

main();

export default main;
