export const isDuplicateWinningNumbers = function (inputValue, errorMessage) {
  const winningNumbersArray = inputValue.split(",");
  const winningNumbersSet = new Set(winningNumbersArray);
  const isValid = winningNumbersSet.size === winningNumbersArray.length;

  if (!isValid) throw new Error(errorMessage);
};
