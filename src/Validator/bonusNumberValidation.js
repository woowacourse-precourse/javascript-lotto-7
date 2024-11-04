import { ERROR_MESSAGES } from '../Constant/error.js';
import { SYMBOLS } from '../Constant/symbols.js';

const BONUS_NUMBER_ONE = (bonusNumber) => {
  const parsedNumber = parseInt(bonusNumber);
  return parsedNumber >= 1 && parsedNumber <= 45;
};

const BONUS_NUMBER_DUPLICATION = (bonusNumber, winningNumber) => {
  return winningNumber.split(SYMBOLS.comma).map(Number).includes(bonusNumber);
};

export const BONUS_NUMBER_VALIDATION = (bonusNumber, winningNumber) => {
  const parsedBonusNumber = parseInt(bonusNumber);

  if (!BONUS_NUMBER_ONE(parsedBonusNumber)) {
    throw new Error(ERROR_MESSAGES.IS_BONUS_NUMBER_ONE);
  }
  if (BONUS_NUMBER_DUPLICATION(parsedBonusNumber, winningNumber)) {
    throw new Error(ERROR_MESSAGES.IS_BONUS_NUMBER_DUPLICATION);
  }
};
