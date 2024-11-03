import { Console } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
import ERROR_MESSAGES from '../utills/errors.js';

class LottoInputReader {
  static async readLottoPurchaseAmount() {
    const input = await Console.readLineAsync('구입금액을 입력해 주세요.\n');
    this.#validateInputNotEmpty(input.trim());

    const lottoPurchaseAmount = Number(input);
    this.#validatePurchaseAmountIsNumber(lottoPurchaseAmount);
    this.#validatePurchaseAmountUnit(lottoPurchaseAmount);

    return lottoPurchaseAmount;
  }

  static async readWinningNumbers() {
    const input = await Console.readLineAsync('당첨 번호를 입력해 주세요.\n');
    this.#validateInputNotEmpty(input.trim());

    const winningNumber = new Lotto(
      input
        .split(',')
        .map(Number)
        .sort((a, b) => a - b)
    );

    return winningNumber;
  }

  static async readBonusNumber() {
    const input = await Console.readLineAsync(
      '\n보너스 번호를 입력해 주세요.\n'
    );
    this.#validateInputNotEmpty(input.trim());

    const bonusNumber = Number(input);
    this.#validateBonusNumberRange(bonusNumber);

    return bonusNumber;
  }

  static #validateInputNotEmpty(input) {
    if (!input) {
      throw new Error(ERROR_MESSAGES.INPUT.EMPTY_INPUT);
    }
  }

  static #validatePurchaseAmountIsNumber(purchaseAmount) {
    if (!Number.isInteger(purchaseAmount)) {
      throw new Error(ERROR_MESSAGES.INPUT.NOT_A_NUMBER);
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
