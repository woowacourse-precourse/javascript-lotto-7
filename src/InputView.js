import { printResult, readUserInput } from './util/missionUtil.js';
import {
  MONEY_MESSAGES,
  WINNING_NUMBER_MESSAGE,
  LOTTO_CONSTANTS,
  BONUS_NUMBER_MESSAGE,
} from './util/constant.js';

class InputView {
  static async processMoney() {
    try {
      const money = await this.readMoney();
      return money;
    } catch (error) {
      printResult(error.message);
      return await this.processMoney();
    }
  }

  static async readMoney() {
    const money = await readUserInput(MONEY_MESSAGES.question);
    this.validateMoney(money.trim(''));
    return money.trim('');
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
      const winningNumbers = await this.readWinningNumber();
      return winningNumbers;
    } catch (error) {
      printResult(error.message);
      return await this.processWinningNumber();
    }
  }

  static async readWinningNumber() {
    let winningNumbers = await readUserInput(WINNING_NUMBER_MESSAGE.question);
    winningNumbers = this.validateWinningNumbers(winningNumbers);
    return winningNumbers;
  }

  static validateWinningNumbers(numbers) {
    const winningNumbers = numbers.split(',').map((number) => number.trim());
    const winningNumbersSet = new Set(winningNumbers);
    this.validateNumber(winningNumbers);

    if (winningNumbers.length < 6 || winningNumbers.length > 6)
      throw new Error(WINNING_NUMBER_MESSAGE.error.notOver6);
    if (winningNumbersSet.size !== winningNumbers.length)
      throw new Error(WINNING_NUMBER_MESSAGE.error.notDuplcate);

    return winningNumbers;
  }

  static validateNumber(numbers) {
    const isNotNumber = numbers.some((number) => isNaN(number));
    const isIncludeBlank = numbers.some((number) => number === '');
    const isNotInRange = numbers.some(
      (number) =>
        number < LOTTO_CONSTANTS.minLottoNumber ||
        number > LOTTO_CONSTANTS.maxLottoNumber
    );
    if (isNotNumber) throw new Error(WINNING_NUMBER_MESSAGE.error.notNumber);
    if (isIncludeBlank) throw new Error(WINNING_NUMBER_MESSAGE.error.notBlank);
    if (isNotInRange) throw new Error(WINNING_NUMBER_MESSAGE.error.notInRange);
  }

  static async processBonusNumber(winningNumbers) {
    try {
      const bonusNumber = await this.readBonusNumber(winningNumbers);
      return bonusNumber;
    } catch (error) {
      printResult(error.message);
      return await this.processBonusNumber(winningNumbers);
    }
  }

  static async readBonusNumber(winningNumbers) {
    const bonusNumber = await readUserInput(BONUS_NUMBER_MESSAGE.question);
    this.validateBonusNumber(bonusNumber, winningNumbers);
    return bonusNumber;
  }

  static validateBonusNumber(bonusNumber, winningNumbers) {
    const isDuplicate = winningNumbers.some((number) => number === bonusNumber);
    const isNotInRange =
      bonusNumber < LOTTO_CONSTANTS.minLottoNumber ||
      bonusNumber > LOTTO_CONSTANTS.maxLottoNumber;

    if (isDuplicate) throw new Error(BONUS_NUMBER_MESSAGE.error.notDuplicate);
    if (isNaN(bonusNumber))
      throw new Error(BONUS_NUMBER_MESSAGE.error.notNumber);
    if (isNotInRange) throw new Error(BONUS_NUMBER_MESSAGE.error.notInRange);
  }
}

export default InputView;
