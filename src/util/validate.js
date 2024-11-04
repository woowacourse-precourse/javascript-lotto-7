export const isNull = (value) => {
  return !value;
};

export const isPerThousandWon = (value) => {
  return value % 1000 !== 0;
};

export const isCorrectLength = (value) => {
  return value != 6;
};

export const isNoOverlap = (value) => {
  return value.length !== new Set(value).size;
};

export const isCorrectRange = (value) => {
  return !(1 <= value <= 45);
};
