import { WINNING_NUMBERS } from "../../constants/validationMessages/winningNumbers.js";

export const isWinningNumbersSeparator = function (winningNumbers) {
  const isValid = winningNumbers.includes(",");

  if (!isValid) throw new Error(WINNING_NUMBERS.INVALID_SEPARATOR);
};
