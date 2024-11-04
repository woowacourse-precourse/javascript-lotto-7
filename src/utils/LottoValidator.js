import OutputView from "../views/outputView.js";
import { ERROR_MESSAGE } from "../utils/constants.js";

export default class LottoValidator {
  static validatePurchaseAmount(amount) {
    if (isNaN(amount)) {
      OutputView.printErrorMessage(ERROR_MESSAGE.INVALID_ISNAN);
      return false;
    }

    if (amount % 1000 !== 0 || amount <= 0) {
      OutputView.printErrorMessage(ERROR_MESSAGE.INVALID_PURCHASE);
      return false;
    }

    return true;
  }

  static validateWinningNumbers(numbers) {
    if (numbers.length !== 6) {
      OutputView.printErrorMessage(ERROR_MESSAGE.INVALID_WINNING_NUMBERS);
      return false;
    }

    if (new Set(numbers).size !== numbers.length) {
      OutputView.printErrorMessage(ERROR_MESSAGE.DUPLICATE_NUMBER);
      return false;
    }

    for (const number of numbers) {
      if (number < 1 || number > 45) {
        OutputView.printErrorMessage(ERROR_MESSAGE.NUMBER_OUT_OF_RANGE);
        return false;
      }
    }
    return true;
  }

  static validateBonusNumber(bonusNumber, winningNumbers) {
    if (winningNumbers.includes(bonusNumber)) {
      OutputView.printErrorMessage(ERROR_MESSAGE.DUPLICATE_BONUS_NUMBER);
      return false;
    }

    if (bonusNumber < 1 || bonusNumber > 45) {
      OutputView.printErrorMessage(ERROR_MESSAGE.NUMBER_OUT_OF_RANGE);
      return false;
    }

    return true;
  }
}
