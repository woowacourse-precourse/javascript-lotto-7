import { Console } from "@woowacourse/mission-utils";
import {
  ERROR_MESSAGE,
  INPUT_MESSAGE,
  LOTTO_COUNT_MAX,
  LOTTO_EACH_AMOUNT,
  LOTTO_MAX_NUMBER,
  LOTTO_MIN_NUMBER,
} from "../constants.js";
import { hasBonusDuplicate, hasDuplicatesArr } from "../util/duplicateCheck.js";
import OutputView from "./OutputView.js";

const InputView = {
  async lottoAmount() {
    try {
      const input = await Console.readLineAsync(INPUT_MESSAGE.LOTTO_MONEY);
      InputValidation.validateAmount(input);
      return input;
    } catch (error) {
      OutputView.printError(error);
      return await this.lottoAmount();
    }
  },

  async lottoWinningNumbers() {
    try {
      const input = await Console.readLineAsync(
        INPUT_MESSAGE.LOTTO_WINNING_NUMBERS
      );
      InputValidation.validateWinningNumbers(input.split(","));
      return input;
    } catch (error) {
      OutputView.printError(error);
      return await this.lottoWinningNumbers();
    }
  },

  async lottoBonusNumber(winningNumbers) {
    try {
      const input = await Console.readLineAsync(
        INPUT_MESSAGE.LOTTO_BOUNUS_NUMBER
      );
      InputValidation.validateBonusNumber(input, winningNumbers);
      return input;
    } catch (error) {
      OutputView.printError(error);
      return await this.lottoBonusNumber(winningNumbers);
    }
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

  validateWinningNumbers(numbers) {
    if (numbers.length !== LOTTO_COUNT_MAX) {
      throw new Error(ERROR_MESSAGE.WINNING_LOTTO_LENGTH_ERROR);
    }
    numbers.forEach((value) => {
      if (isNaN(value) || value === "") {
        throw new Error(ERROR_MESSAGE.WINNING_LOTTO_NUMBER_ERROR);
      }
      if (
        Number(value) > LOTTO_MAX_NUMBER ||
        Number(value) < LOTTO_MIN_NUMBER
      ) {
        throw new Error(ERROR_MESSAGE.WINNING_LOTTO_MAX_MIN_ERROR);
      }
    });
    if (hasDuplicatesArr(numbers)) {
      throw new Error(ERROR_MESSAGE.WINNING_LOTTO_NUMBER_DUPLICATE_ERROR);
    }
  },

  validateBonusNumber(bonusNumber, arr) {
    if (isNaN(bonusNumber) || bonusNumber === "") {
      throw new Error(ERROR_MESSAGE.WINNING_LOTTO_BONUS_NUMBER_ERROR);
    }

    if (hasBonusDuplicate(Number(bonusNumber), arr)) {
      throw new Error(ERROR_MESSAGE.WINNING_LOTTO_BONUS_NUMBER_DUPLICATE_ERROR);
    }
    if (
      Number(bonusNumber) > LOTTO_MAX_NUMBER ||
      Number(bonusNumber) < LOTTO_MIN_NUMBER
    ) {
      throw new Error(ERROR_MESSAGE.BONUS_NUMBER_INPUT_ERROR);
    }
  },
};

export { InputView, InputValidation };
