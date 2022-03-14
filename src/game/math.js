export const getRandom = (from, to) => Math.floor(Math.random() * to + from);

export const getNumber = () => getRandom(1, 1000);
