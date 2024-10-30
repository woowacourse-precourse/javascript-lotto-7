import { ERROR_MESSAGE } from './errorMessages.js';

const isBonusNumberEmptyInput = (BonusNumber) => BonusNumber !== '';

const validateBonusNumber = (BonusNumber) => {
  if (!isBonusNumberEmptyInput(BonusNumber)) {
    throw new Error(ERROR_MESSAGE.EMPTY_INPUT_BONUS_NUMBER);
  }
};

export { validateBonusNumber };
