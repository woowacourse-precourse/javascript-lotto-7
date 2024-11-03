export const isNumber = (number) => {
  return typeof number === "number" && !Number.isNaN(number);
};

export const isOutRangeNumber = (targetNumber, min, max) => {
  return targetNumber < min || max < targetNumber;
};

export const duplicateNumbers = (numbers) => {
  return new Set(numbers).size !== numbers.length;
};
