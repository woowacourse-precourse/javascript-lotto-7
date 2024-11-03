export const isLottoLengthValid = (numbers) => numbers.length === 6;

export const isNumber = (number) => !Number.isNaN(Number(number));

export const isInteger = (number) => Number.isInteger(Number(number));

export const isInRange = (number) => number >= 1 && number <= 45;

export const hasDuplicate = (array) => new Set(array).size !== array.length;
