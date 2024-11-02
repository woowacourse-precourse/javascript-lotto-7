import { printResult, readUserInput } from './util/missionUtil.js';
import {
  MONEY_MESSAGES,
  WINNING_NUMBER_MESSAGE,
  LOTTO_CONSTANTS,
} from './util/constant.js';

class InputView {
  static async processMoney() {
    try {
      const money = await readUserInput(MONEY_MESSAGES.question);
      this.validateMoney(money.trim(''));
      return money.trim('');
    } catch (error) {
      printResult(error.message);
      return await this.processMoney();
    }
  }

  static validateMoney(money) {
    const MONEY_NUMBER = Number(money);

    if (Number.isNaN(MONEY_NUMBER))
      throw new Error(MONEY_MESSAGES.error.notNumber);
    if (money.length === 0) throw new Error(MONEY_MESSAGES.error.notBlank);
    if (MONEY_NUMBER % 1000 !== 0)
      throw new Error(MONEY_MESSAGES.error.notDevide);
  }

  static async processWinningNumber() {
    try {
      const winningNumbers = await readUserInput(
        WINNING_NUMBER_MESSAGE.question
      );
      this.validateWinningNumber(winningNumbers);
    } catch (error) {
      printResult(error.message);
      return await this.processWinningNumber();
    }
  }

  static validateWinningNumber(numbers) {
    const winningNumber = numbers.split(',').map((number) => number.trim());
    const winningNumberSet = new Set(winningNumber);
    const isNotNumber = winningNumber.some((number) => isNaN(number));
    const isIncludeBlank = winningNumber.some((number) => number === '');
    const isNotInRange = winningNumber.some(
      (number) =>
        number < LOTTO_CONSTANTS.minLottoNumber ||
        number > LOTTO_CONSTANTS.maxLottoNumber
    );
    if (isNotNumber) {
      throw new Error(WINNING_NUMBER_MESSAGE.error.notNumber);
    }
    if (winningNumber.length < 6) {
      throw new Error(WINNING_NUMBER_MESSAGE.error.notOver6);
    }
    if (isIncludeBlank) {
      throw new Error(WINNING_NUMBER_MESSAGE.error.notBlank);
    }
    if (winningNumberSet.size !== winningNumber.length) {
      throw new Error(WINNING_NUMBER_MESSAGE.error.notDuplcate);
    }
    if (isNotInRange) {
      throw new Error(WINNING_NUMBER_MESSAGE.error.notInRange);
    }
  }
}

export default InputView;
