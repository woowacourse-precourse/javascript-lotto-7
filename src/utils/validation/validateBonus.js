import ERROR_MESSAGE from '../../constants/ErrorMessage.js';

function validateBonusNumberLength(bonusNumber) {
  if (bonusNumber < 1 || bonusNumber > 45) {
    throw new Error(ERROR_MESSAGE.INVALID_WINNING_BONUS_NUMBER);
  }
}

function validateBonusNumberUnique(bonusNumber, winningLotto) {
  if (winningLotto.includes(bonusNumber)) {
    throw new Error(ERROR_MESSAGE.DUPLICATE_WINNING_NUMBERS);
  }
}

function validateBonusNumber(bonusNumber) {
  if (typeof bonusNumber !== 'number' || Number.isNaN(bonusNumber)) {
    throw new Error(ERROR_MESSAGE.INVALID_NOT_NUMBER);
  }
}

export default function validateBonus(bonusNumber, winningLotto) {
  if (typeof bonusNumber === 'string' && bonusNumber.trim().length === 0) {
    throw new Error(ERROR_MESSAGE.INVALID_NOT_NUMBER);
  }

  const parsedBonusNumber = Number(bonusNumber);
  validateBonusNumber(parsedBonusNumber);
  validateBonusNumberLength(parsedBonusNumber);
  validateBonusNumberUnique(parsedBonusNumber, winningLotto);
}
