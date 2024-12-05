export const limitRangeNum = (
  inputNumber,
  minNumValue,
  maxNumValue,
  errorMessage
) => {
  if (
    minNumValue !== undefined &&
    maxNumValue !== undefined &&
    !(inputNumber >= minNumValue && inputNumber <= maxNumValue)
  ) {
    throw new Error(errorMessage);
  }
};
