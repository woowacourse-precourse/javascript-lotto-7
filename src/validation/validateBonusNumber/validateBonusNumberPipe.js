import { isNumber } from "../isNumber.js";
import {
  BONUS_NUMBER_COUNT,
  WINNING_NUMBER_DELIMITER,
} from "../../constants/lottoConstants.js";
import { isNumbersCountInRange } from "../isNumbersCountInRange.js";
import { isWinningNumbersInRange } from "../isWinningNumbersInRange.js";
import { isDuplicateWinningNumbers } from "../isDuplicateWinningNumbers.js";
import { BONUS_NUMBER } from "../../constants/validationMessages/bonusNumber.js";

export const validateBonusNumberPipe = function (bonusNumber, winningNumbers) {
  const mergedWinningAndBonusNumbers =
    (winningNumbers += `${WINNING_NUMBER_DELIMITER}${bonusNumber}`);

  isNumbersCountInRange(
    bonusNumber,
    BONUS_NUMBER_COUNT,
    BONUS_NUMBER.INVALID_COUNT
  );
  isNumber(bonusNumber, BONUS_NUMBER.NOT_A_NUMBER);
  isDuplicateWinningNumbers(
    mergedWinningAndBonusNumbers,
    BONUS_NUMBER.DUPLICATE_WITH_WINNING
  );
  isWinningNumbersInRange(bonusNumber, BONUS_NUMBER.OUT_OF_RANGE);
};
