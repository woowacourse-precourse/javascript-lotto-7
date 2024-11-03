import { Console } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
import ERROR_MESSAGES from '../utills/errors.js';

class LottoInputReader {
  static async readLottoPurchaseAmount() {
    const input = await Console.readLineAsync('구입금액을 입력해 주세요.\n');

    return this.#validatePurchaseAmount(input);
  }

  static async readWinningNumbers() {
    const input = await Console.readLineAsync('당첨 번호를 입력해 주세요.\n');
    this.#validateInputNotEmpty(input.trim());

    return new Lotto(
      input
        .split(',')
        .map(Number)
        .sort((a, b) => a - b)
    );
  }

  static async readBonusNumber() {
    const input = await Console.readLineAsync(
      '\n보너스 번호를 입력해 주세요.\n'
    );

    return this.#validateBonusNumber(input);
  }

  static #validatePurchaseAmount(input) {
    this.#validateInputNotEmpty(input.trim());
    const lottoPurchaseAmount = Number(input);

    this.#validateIsNumber(lottoPurchaseAmount);
    this.#validateIsPositive(lottoPurchaseAmount);
    this.#validatePurchaseAmountUnit(lottoPurchaseAmount);

    return lottoPurchaseAmount;
  }

  static #validateBonusNumber(input) {
    this.#validateInputNotEmpty(input.trim());
    const bonusNumber = Number(input);

    this.#validateIsNumber(bonusNumber);
    this.#validateIsPositive(bonusNumber);
    this.#validateBonusNumberRange(bonusNumber);

    return bonusNumber;
  }

  static #validateInputNotEmpty(input) {
    if (!input) {
      throw new Error(ERROR_MESSAGES.INPUT.EMPTY_INPUT);
    }
  }

  static #validateIsNumber(input) {
    if (!Number.isInteger(input)) {
      throw new Error(ERROR_MESSAGES.INPUT.NOT_A_NUMBER);
    }
  }

  static #validateIsPositive(input) {
    if (input <= 0) {
      throw new Error(ERROR_MESSAGES.INPUT.NEGATIVE_OR_ZERO_AMOUNT);
    }
  }

  static #validatePurchaseAmountUnit(purchaseAmount) {
    if (purchaseAmount % 1000) {
      throw new Error(ERROR_MESSAGES.INPUT.INVALID_AMOUNT);
    }
  }

  static #validateBonusNumberRange(bonusNumber) {
    if (bonusNumber < 1 || bonusNumber > 45) {
      throw new Error(ERROR_MESSAGES.LOTTO.INVALID_RANGE);
    }
  }
}

export default LottoInputReader;
