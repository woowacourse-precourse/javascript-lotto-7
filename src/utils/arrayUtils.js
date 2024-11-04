export const hasDuplicates = (array) => {
  const uniqueValues = new Set(array);

  return array.length > uniqueValues.size;
};

export const isBonusMatched = (array, value) => {
  return array.includes(value);
};

export const getMatchingCount = (winningNumbers, lottoNumbers) => {
  const matchCount = lottoNumbers.filter((number) => winningNumbers.includes(number)).length;

  return matchCount;
};
