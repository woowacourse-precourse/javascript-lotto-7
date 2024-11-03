import { ErrorMessage, Lotto } from '../resources/Constants.js';

function validateBonusNumberIsNumber(bonusNumber) {
  const isNumber = bonusNumber !== null && !Number.isNaN(Number(bonusNumber));

  if (!isNumber) {
    throw new Error(ErrorMessage.BONUS_NUMBER_IS_NOT_NUMBER);
  }
}

function validateBonusNumberIsInRange(bonusNumber) {
  const isInRange =
    Number(bonusNumber) >= Lotto.MIN_NUMBER &&
    Number(bonusNumber) <= Lotto.MAX_NUMBER;

  if (!isInRange) {
    throw new Error(ErrorMessage.BONUS_NUMBER_IN_NOT_VALID_RANGE);
  }
}
export function bonusNumberValidator(bonusNumber) {
  validateBonusNumberIsNumber(bonusNumber);
  validateBonusNumberIsInRange(bonusNumber);
}
