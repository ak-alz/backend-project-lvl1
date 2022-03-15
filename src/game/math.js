export const getRandom = (from, to) => Math.floor(Math.random() * to + from);

export const getNumber = () => getRandom(1, 1000);

export const gct = (x, y) => {
  let gctCurrent = 1;
  for (let i = 1; i < Math.floor(Math.min(x, y) / 2); i += 1) {
    if (x % i === 0 && y % i === 0) gctCurrent = i;
  }
  return gctCurrent;
};
