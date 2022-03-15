export const getRandom = (from, to) => Math.floor(Math.random() * to + from);

export const getNumber = () => getRandom(1, 1000);

export const gct = (x, y) => {
  let gctCurrent = 1;
  for (let i = 1; i <= Math.min(x, y); i += 1) {
    if (x % i === 0 && y % i === 0) gctCurrent = i;
  }
  return gctCurrent;
};

export const getArithmeticProgression = (length) => {
  const progression = [];
  const step = getRandom(1, 5);
  let member = getRandom(1, 15);
  let condition = length;
  while (condition > 0) {
    progression.push(member);
    member += step;
    condition -= 1;
  }
  return progression;
};

export const isPrimeNumber = (number) => {
  if (number < 2) return false;
  for (let i = 2; i < Math.floor(number / 2); i += 1) {
    if (number % i === 0) return false;
  }
  return true;
};
