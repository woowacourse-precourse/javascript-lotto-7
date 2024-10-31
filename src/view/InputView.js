import { Console } from "@woowacourse/mission-utils";
import {
  ERROR_MESSAGE,
  INPUT_MESSAGE,
  LOTTO_COUNT_MAX,
  LOTTO_EACH_AMOUNT,
} from "../constants.js";
import { hasBonusDuplicate } from "../util/duplicateCheck.js";

const InputView = {
  async lottoAmount() {
    return await Console.readLineAsync(INPUT_MESSAGE.LOTTO_MONEY);
  },

  async lottoWinningNumbers() {
    return await Console.readLineAsync(INPUT_MESSAGE.LOTTO_WINNING_NUMBERS);
  },

  async lottoBonusNumber() {
    return await Console.readLineAsync(INPUT_MESSAGE.LOTTO_BOUNUS_NUMBER);
  },
};

const InputValidation = {
  validateAmount(amount) {
    if (amount % LOTTO_EACH_AMOUNT !== 0) {
      throw new Error(ERROR_MESSAGE.LOTTO_MONEY_INPUT_ERORR);
    }

    if (isNaN(amount) || amount === "") {
      throw new Error(ERROR_MESSAGE.LOTTO_MONEY_INPUT_STRING_ERORR);
    }
  },

  validateBonusNumber(bonusNumber, arr) {
    if (isNaN(bonusNumber) || bonusNumber === "") {
      throw new Error(ERROR_MESSAGE.WINNING_LOTTO_BONUS_NUMBER_ERROR);
    }

    if (hasBonusDuplicate(bonusNumber, arr)) {
      throw new Error(ERROR_MESSAGE.WINNING_LOTTO_NUMBER_DUPLICATE_ERROR);
    }
  },
};

export { InputView, InputValidation };
