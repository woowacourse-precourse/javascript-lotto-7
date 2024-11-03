import { isWinningNumbers } from "./isWinningNumbers.js";
import { isWinningNumbersInRange } from "../isWinningNumbersInRange.js";
import { isWinningNumbersSeparator } from "./isWinningNumbersSeparator.js";
import { isDuplicateWinningNumbers } from "../isDuplicateWinningNumbers.js";
import { isWinningNumbersCountInRange } from "./isWinningNumbersCountInRange.js";
import { WINNING_NUMBERS } from "../../constants/validationMessages/winningNumbers.js";

export const validateWinningNumbersPipe = function (winningNumbers) {
  isWinningNumbersSeparator(winningNumbers);
  isWinningNumbers(winningNumbers);
  isDuplicateWinningNumbers(winningNumbers, WINNING_NUMBERS.DUPLICATE_NUMBERS);
  isWinningNumbersInRange(winningNumbers, WINNING_NUMBERS.OUT_OF_RANGE);
  isWinningNumbersCountInRange(winningNumbers);
};
