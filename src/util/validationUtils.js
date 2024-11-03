const isValidPurchaseUnit = (amount, unit) => amount % unit === 0;

const isPositiveNumber = (value) => !Number.isNaN(value) && value > 0;

const isValidLength = (numbers, count) => numbers.length === count;

const isUnique = (value, comparisonArray = []) => {
  if (Array.isArray(value)) {
    return new Set(value).size === value.length;
  }

  return !comparisonArray.includes(value);
};

const isValidInRange = (value, min, max) => {
  if (Array.isArray(value)) {
    return value.every((num) => num >= min && num <= max);
  }
  return value >= min && value <= max;
};

export {
  isValidPurchaseUnit,
  isPositiveNumber,
  isValidLength,
  isUnique,
  isValidInRange,
};
