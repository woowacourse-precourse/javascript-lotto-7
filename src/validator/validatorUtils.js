export const isValidatePositiveInteger = (number) => {
  return !isNaN(number) && Number.isInteger(number) && number > 0;
};

export const isWinningNumbersFormat = (number) => {
  return /^\d+$/.test(number);
};

export const isNumbersInRange = (number) => {
  return number >= 1 && number <= 45;
};

export const isCostInUnits = (cost) => {
  return cost % 1000 === 0;
};
