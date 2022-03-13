import readlineSync from 'readline-sync';

export const output = (text) => console.log(text);

export const question = (text) => readlineSync.question(`${text} `);

export const cli = () => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${name}`);
};

export default cli;
