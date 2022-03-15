#!/usr/bin/env node
import * as gameMath from '../src/game/math.js';
import * as gameGeneral from '../src/game/general.js';

const brainGcd = () => {
  const expression = [];
  expression.push(gameMath.getRandom(1, 100));
  expression.push(gameMath.getRandom(1, 100));
  const [x, y] = expression;

  const userAnswer = gameGeneral.getAnswer(expression);
  const rightAnswer = gameMath.gct(x, y);

  return gameGeneral.getGameResultObject(Number(rightAnswer), Number(userAnswer));
};

gameGeneral.runGame(brainGcd);
