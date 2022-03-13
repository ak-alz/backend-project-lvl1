import readlineSync from 'readline-sync';

const output = (text) => console.log(text);

const question = (text) => readlineSync.question(`${text} `);

const getNumber = () => Math.floor((Math.random() * 1000) + 1);

const evenGame = () => {
  output('Welcome to the Brain Games!');
  const name = question('May I have your name?');
  output(`Hello, ${name}!`);
  output('Answer "yes" if the number is even, otherwise answer "no".');

  let gameStatus = true;
  for (let i = 0; i < 3; i += 1) {
    const number = getNumber();
    const answer = question(`Question: ${number}`);
    const numberEven = number % 2 === 0;
    const correctAnswer = numberEven ? 'yes' : 'no';
    if (answer !== correctAnswer) {
      output(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      gameStatus = false;
      break;
    }
    output('Correct!');
  }

  if (gameStatus) output(`Congratulations, ${name}!`);
};

evenGame();

export default evenGame;
