#!/usr/bin/env node
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

const baseGameFunction = () => {
  const expression = [];
  expression.push(gameMath.getNumber());
  expression.push(getOperation());
  expression.push(gameMath.getNumber());

  const userAnswer = gameGeneral.getAnswer(expression);
  const rightAnswer = getCorrectAnswer(expression);

  return gameGeneral.getGameResultObject(+rightAnswer, +userAnswer);
};

gameGeneral.runGame(baseGameFunction);
