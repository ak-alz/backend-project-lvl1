#!/usr/bin/env node
import * as gameMath from '../src/game/math.js';
import * as gameGeneral from '../src/game/general.js';

const brainProgression = () => {
  const progression = gameMath.getArithmeticProgression(
    gameMath.getRandom(5, 10),
  );
  const hideIndex = gameMath.getRandom(0, progression.length - 1);
  const rightAnswer = progression[hideIndex];

  const expression = [];
  progression[hideIndex] = '..';
  expression.push(progression);

  const userAnswer = gameGeneral.getAnswer(expression);

  return gameGeneral.getGameResultObject(
    Number(rightAnswer),
    Number(userAnswer),
  );
};

gameGeneral.runGame(brainProgression);
