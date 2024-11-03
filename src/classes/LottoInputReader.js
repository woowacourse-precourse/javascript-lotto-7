import { Console } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
import ERROR_MESSAGES from '../utills/errors.js';

class LottoInputReader {
  static #winningNumbers;

  static async readLottoPurchaseAmount() {
    const input = await Console.readLineAsync('구입금액을 입력해 주세요.\n');
    
    return this.#validatePurchaseAmount(input);
  }

  static async readWinningNumbers() {
    const input = await Console.readLineAsync('당첨 번호를 입력해 주세요.\n');
    this.#validateInputNotEmpty(input.trim());
    this.#validateWinningNumbersFormat(input.trim());

    this.#winningNumbers = new Lotto(
      input
        .split(',')
        .map(Number)
        .sort((a, b) => a - b)
    );

    return this.#winningNumbers;
  }

  static async readBonusNumber() {
    const input = await Console.readLineAsync(
      '\n보너스 번호를 입력해 주세요.\n'
    );

    return this.#validateBonusNumber(input);
  }

  // 테스트 용도로 winningNumbers를 설정하는 메서드
  static setWinningNumbers(numbers) {
    this.#winningNumbers = numbers;
  }

  static #validatePurchaseAmount(input) {
    this.#validateInputNotEmpty(input.trim());
    const lottoPurchaseAmount = Number(input);

    this.#validateIsNumber(lottoPurchaseAmount);
    this.#validatePurchaseAmountIsPositive(lottoPurchaseAmount);
    this.#validatePurchaseAmountUnit(lottoPurchaseAmount);

    return lottoPurchaseAmount;
  }

  static #validateBonusNumber(input) {
    this.#validateInputNotEmpty(input.trim());
    const bonusNumber = Number(input);

    this.#validateIsNumber(bonusNumber);
    this.#validateBonusNumberRange(bonusNumber);
    this.#validateBonusNumberDuplicate(bonusNumber);

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

  static #validatePurchaseAmountIsPositive(purchaseAmount) {
    if (purchaseAmount <= 0) {
      throw new Error(ERROR_MESSAGES.INPUT.NEGATIVE_OR_ZERO_AMOUNT);
    }
  }

  static #validatePurchaseAmountUnit(purchaseAmount) {
    if (purchaseAmount % 1000) {
      throw new Error(ERROR_MESSAGES.INPUT.INVALID_AMOUNT);
    }
  }

  static #validateWinningNumbersFormat(input) {
    const regex = /^(\d{1,2})(,\d{1,2}){5}$/; // 쉼표로 구분된 여섯 개의 1~2자리 숫자
    if (!regex.test(input)) {
      throw new Error(ERROR_MESSAGES.LOTTO.INVALID_FORMAT);
    }
  }

  static #validateBonusNumberRange(bonusNumber) {
    if (bonusNumber < 1 || bonusNumber > 45) {
      throw new Error(ERROR_MESSAGES.LOTTO.INVALID_RANGE);
    }
  }

  static #validateBonusNumberDuplicate(bonusNumber) {
    if (this.#winningNumbers.getNumbers().includes(bonusNumber)) {
      throw new Error(ERROR_MESSAGES.LOTTO.DUPLICATE_NUMBERS);
    }
  }
}

export default LottoInputReader;
