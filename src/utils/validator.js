import { ERRORS } from '../constants/errors.js';

class Validator {
  /**
   * 로또 구매 금액을 검증 - 숫자(정수) , 0원 보다 큰 금액, 1000원 단위
   * @param {number} purchasePrice
   * @throws {Error}
   */
  static validatePurchasePrice(purchasePrice) {
    this.#validateIsNumberInteger(purchasePrice);
    if (purchasePrice <= 0) {
      throw new Error(ERRORS.INVALID_PURCHASE_PRICE);
    }

    this.#validatePurchasePriceUnit(purchasePrice);
  }

  static #validatePurchasePriceUnit(purchasePrice) {
    if (!Number.isInteger(purchasePrice / 1000)) {
      throw new Error(ERRORS.INVALID_PURCHASE_PRICE_UNIT);
    }
  }

  /**
   * 당첨 번호가 유효한지 검증 - 당첨번호가 6개인지 검증, 숫자(정수), 1 ~ 45 사이의 숫자, 당첨 번호 중복 체크
   * @param {number[]} winningNumbers
   * @throws {Error}
   */
  static validateWinningNumber(winningNumbers) {
    this.#validateNumberCount(winningNumbers);

    winningNumbers.forEach((winningNumber) => {
      this.validateLottoNumbers(winningNumber);
    });

    this.#validateDuplicateWinningNumber(winningNumbers);
  }

  static #validateNumberCount(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERRORS.INVALID_WINNING_NUMBER_LENGTH);
    }
  }

  /**
   * 보너스 번호가 유효한지 검증 - 숫자(정수), 1 ~ 45 사이의 숫자, 당첨 번호와 중복되지 않는지 검증
   * @param {number} bonusNumber
   * @param {number[]} winningNumbers
   * @throws {Error}
   */
  static validateBonusNumber(bonusNumber, winningNumbers) {
    this.validateLottoNumbers(bonusNumber);
    this.#validateDuplicateBonusNumber(bonusNumber, winningNumbers);
  }

  static #validateDuplicateWinningNumber(winningNumbers) {
    if (new Set(winningNumbers).size !== 6) {
      throw new Error(ERRORS.INVALID_DUPLICATE_WINNING_NUMBER);
    }
  }

  static #validateDuplicateBonusNumber(bonusNumber, winningNumbers) {
    if (winningNumbers.includes(bonusNumber)) {
      throw new Error(ERRORS.INVALID_DUPLICATE_BONUS_NUMBER);
    }
  }

  /**
   * 로또 번호가 유효한지 검증 - 숫자(정수), 1 ~ 45 사이의 숫자
   * @param {number} number
   * @throws {Error}
   */
  static validateLottoNumbers(number) {
    this.#validateIsNumberInteger(number);
    this.#validateNumberRange(number);
  }

  static #validateIsNumberInteger(number) {
    if (!Number.isInteger(number)) {
      throw new Error(ERRORS.INVALID_NUMBER_TYPE);
    }
  }

  static #validateNumberRange(number) {
    if (number < 1 || number > 45) {
      throw new Error(ERRORS.INVALID_NUMBER_RANGE);
    }
  }
}

export default Validator;
