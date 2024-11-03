export const isNumber = (num) => !Number.isNaN(num);

export const isInteger = (num) => Number.isInteger(num);

export const isInRange = (num, min, max) => num >= min && num <= max;
