import { printResult, readUserInput } from './util/missionUtil.js';
import { LOTTO_CONSTANTS } from './util/constant.js';

const MONEY_MESSAGES = Object.freeze({
  question: '구입금액을 입력해 주세요.\n',
  error: {
    notBlank: '[ERROR] 구입금액을 입력하지 않았습니다.',
    notDevide: '[ERROR] 구입금액은 1000원 단위여야 합니다.',
    notNumber: '[ERROR] 숫자를 입력해주세요.',
  },
});

const WINNING_NUMBER_MESSAGE = Object.freeze({
  question: '\n당첨 번호를 입력해 주세요.\n',
  error: {
    notDuplcate: '[ERROR] 중복된 값이 있습니다.',
    notOver6: '[ERROR] 숫자는 6개여야 합니다.',
    notNumber: '[ERROR] 숫자를 입력해주세요.',
    notBlank: '[ERROR] 공백이 있으면 안됩니다.',
    notInRange: '[ERROR] 번호의 범위는 1 ~ 45 이어야 합니다.',
  },
});

const BONUS_NUMBER_MESSAGE = Object.freeze({
  question: '\n보너스 번호를 입력해 주세요.\n',
  error: {
    notBlank: '[ERROR] 보너스 번호를 입력하지 않았습니다.',
    notNumber: '[ERROR] 숫자를 입력해주세요.',
    notInRange: '[ERROR] 번호의 범위는 1 ~ 45 이어야 합니다.',
    notDuplicate: '[ERROR] 번호는 중복되면 안됩니다.',
  },
});

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
