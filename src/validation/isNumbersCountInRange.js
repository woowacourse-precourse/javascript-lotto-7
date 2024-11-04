import { WINNING_NUMBER_DELIMITER } from "../constants/lottoConstants.js";

export const isNumbersCountInRange = function (
  inputNumbers,
  numberCount,
  errorMessage
) {
  const inputNumbersArray = inputNumbers.split(WINNING_NUMBER_DELIMITER);
  const isValid = inputNumbersArray.length === numberCount;
  if (!isValid) throw new Error(errorMessage);
};
