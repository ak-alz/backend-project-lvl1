#!/usr/bin/env node
import * as gameMath from '../src/game/math.js';
import * as gameGeneral from '../src/game/general.js';

const evenGame = () => {
  const number = gameMath.getNumber();
  const expression = [];
  expression.push(number);

  const numberEven = number % 2 === 0;
  const userAnswer = gameGeneral.getAnswer(expression);
  const rightAnswer = numberEven ? 'yes' : 'no';

  return gameGeneral.getGameResultObject(rightAnswer, userAnswer);
};

gameGeneral.runGame(evenGame);
