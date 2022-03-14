import { output, question } from '../cli.js';

export const greetingsGame = () => {
  output('Welcome to the Brain Games!');
  const name = question('May I have your name?');
  output(`Hello, ${name}!`);
  return name;
};

export const startGame = (gameFunction, name) => {
  for (let i = 0; i < 3; i += 1) {
    const result = gameFunction(name);
    if (result === 0) return 0;
  }
  return 1;
};
