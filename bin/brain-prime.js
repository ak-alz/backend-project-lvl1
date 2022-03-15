#!/usr/bin/env node
import * as gameMath from '../src/game/math.js';
import * as gameGeneral from '../src/game/general.js';

const prime = () => {
  const num = gameMath.getRandom(50, 5000);

  const expression = [];
  expression.push(num);

  const userAnswer = gameGeneral.getAnswer(expression);
  const rightAnswer = gameMath.isPrimeNumber(num) ? 'yes' : 'no';

  return gameGeneral.getGameResultObject(rightAnswer, userAnswer);
};

gameGeneral.runGame(prime);
