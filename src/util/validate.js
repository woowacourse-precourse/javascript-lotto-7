export const isNull = (value) => {
  return !value;
};

export const isPerThousandWon = (value) => {
  return value % 1000 !== 0;
};

export const isCorrectLength = (value, length) => {
  return value.length !== length;
};

export const isNoOverlap = (value) => {
  return value.length !== new Set(value).size;
};

