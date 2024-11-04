export const isNumbersCountInRange = function (
  inputNumbers,
  numberCount,
  errorMessage
) {
  const inputNumbersArray = inputNumbers.split(",");
  const isValid = inputNumbersArray.length === numberCount;
  if (!isValid) throw new Error(errorMessage);
};
