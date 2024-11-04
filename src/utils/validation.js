export const hasDuplicate = (array) => {
  const uniqueArray = new Set(array);
  return uniqueArray.size !== array.length;
};

export const isNotPositiveInteger = (number) => {
  return number <= 0 || !Number.isInteger(number);
};

export const isInRange = (min, max, target) => {
  return min <= target && target <= max;
};
