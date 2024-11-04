export const isNaturalNumber = (input) => {
  const NATURAL_NUMBER_PATTERN = /^[1-9]\d*$/;

  return NATURAL_NUMBER_PATTERN.test(input);
};
