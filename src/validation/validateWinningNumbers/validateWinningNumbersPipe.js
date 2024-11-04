import { isWinningNumbers } from "./isWinningNumbers.js";
import { isNumbersCountInRange } from "../isNumbersCountInRange.js";
import { isWinningNumbersInRange } from "../isWinningNumbersInRange.js";
import { WINNING_NUMBER_COUNT } from "../../constants/lottoConstants.js";
import { isWinningNumbersSeparator } from "./isWinningNumbersSeparator.js";
import { isDuplicateWinningNumbers } from "../isDuplicateWinningNumbers.js";
import { WINNING_NUMBERS } from "../../constants/validationMessages/winningNumbers.js";

export const validateWinningNumbersPipe = function (winningNumbers) {
  isWinningNumbersSeparator(winningNumbers);
  isNumbersCountInRange(
    winningNumbers,
    WINNING_NUMBER_COUNT,
    WINNING_NUMBERS.INVALID_COUNT
  );
  isWinningNumbers(winningNumbers);
  isDuplicateWinningNumbers(winningNumbers, WINNING_NUMBERS.DUPLICATE_NUMBERS);
  isWinningNumbersInRange(winningNumbers, WINNING_NUMBERS.OUT_OF_RANGE);
};
