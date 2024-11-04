export const isNull = (value) => {
  return !value;
};

export const isPerThousandWon = (value) => {
  return value % 1000 !== 0;
};
