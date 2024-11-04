import { WINNING_NUMBER_DELIMITER } from "../constants/lottoConstants.js";

export const isDuplicateWinningNumbers = function (inputValue, errorMessage) {
  const winningNumbersArray = inputValue.split(WINNING_NUMBER_DELIMITER);
  const winningNumbersSet = new Set(winningNumbersArray);
  const isValid = winningNumbersSet.size === winningNumbersArray.length;

  if (!isValid) throw new Error(errorMessage);
};
