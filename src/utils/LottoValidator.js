import { MAX_PURCHASE_AMOUNT } from '../constants/config.js';
import { ERROR_MSG } from '../constants/messages.js';
import Output from '../views/Output.js';

/**
 * 구입 금액의 유효성을 검증합니다.
 * @param {number} purchaseAmount - 구입 금액
 * @throws {Error}
 */
export const validatePurchaseAmount = (purchaseAmount) => {
  if (!purchaseAmount) {
    Output.displayError(ERROR_MSG.INVALID_AMOUNT);
  }

  const amount = Number(purchaseAmount);

  if (Number.isNaN(amount)) {
    Output.displayError(ERROR_MSG.INVALID_AMOUNT);
  }
  if (amount > MAX_PURCHASE_AMOUNT) {
    Output.displayError(ERROR_MSG.MAX_PURCHASE_AMOUNT);
  }
  if (amount < 0) {
    Output.displayError(ERROR_MSG.NEGATIVE_AMOUNT);
  }
};

/**
 * 당첨 번호의 유효성을 검증합니다.
 * @param {string} winningNumbers - 쉼표로 구분된 당첨 번호 문자열
 * @throws {Error}
 */
export const validateWinningNumbers = (winningNumbers) => {
  const numbers = winningNumbers.split(',').map(Number);
  if (numbers.length !== 6) {
    Output.displayError(ERROR_MSG.INVALID_WINNING_NUMBERS);
  }
};

/**
 * 보너스 번호의 유효성을 검증합니다.
 * @param {number} bonusNumber - 보너스 번호
 * @throws {Error}
 */
export const validateBonusNumber = (bonusNumber) => {
  if (Number.isNaN(bonusNumber)) {
    Output.displayError(ERROR_MSG.INVALID_BONUS_NUMBER);
  }
  if (bonusNumber < 1 || bonusNumber > 45) {
    Output.displayError(ERROR_MSG.INVALID_BONUS_NUMBER);
  }
};
