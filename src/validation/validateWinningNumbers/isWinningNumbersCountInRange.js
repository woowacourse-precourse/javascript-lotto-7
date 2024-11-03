import { WINNING_NUMBER_COUNT } from "../../constants/lottoConstants.js";
import { WINNING_NUMBERS } from "../../constants/validationMessages/winningNumbers.js";

export const isWinningNumbersCountInRange = function (winningNumbers) {
  const winningNumbersArray = winningNumbers.split(",");
  const isValid = winningNumbersArray.length === WINNING_NUMBER_COUNT;
  if (!isValid) throw new Error(WINNING_NUMBERS.INVALID_COUNT);
};
