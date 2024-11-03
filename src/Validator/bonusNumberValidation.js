import { ERROR_MESSAGES } from '../Constant/error.js';

const BONUS_NUMBER_ONE = (bonusNumber) => {
  return parseInt(bonusNumber) >= 1 && parseInt(bonusNumber) <= 45;
};
const BONUS_NUMBER_DUPLICATION = (bonusNumber, winningNumber) => {
  return winningNumber.split(',').map(Number).includes(bonusNumber);
};

export const BONUS_NUMBER_VALIDATION = (bonusNumber, winningNumber) => {
  if (!BONUS_NUMBER_ONE(bonusNumber)) {
    throw new Error(ERROR_MESSAGES.IS_BONUS_NUMBER_ONE);
  }
  if (BONUS_NUMBER_DUPLICATION(bonusNumber, winningNumber)) {
    throw new Error(ERROR_MESSAGES.IS_BONUS_NUMBER_DUPLICATION);
  }
};
