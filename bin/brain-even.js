#!/usr/bin/env node
import { output, question } from '../src/cli.js';
import * as gameMath from '../src/game/math.js';

const evenGame = () => {
  output('Welcome to the Brain Games!');
  const name = question('May I have your name?');
  output(`Hello, ${name}!`);
  output('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const number = gameMath.getNumber();
    const answer = question(`Question: ${number}`);
    const numberEven = number % 2 === 0;
    const correctAnswer = numberEven ? 'yes' : 'no';
    if (answer !== correctAnswer) {
      output(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      return 0;
    }
    output('Correct!');
  }

  output(`Congratulations, ${name}!`);
  return 1;
};

evenGame();

export default evenGame;
