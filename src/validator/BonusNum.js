import { ERROR_MESSAGE } from "../constants/Message.js";

const validateNumberOnly = (bonusNumber) => {
  if (!Number.isInteger(bonusNumber)) {
    throw new Error(ERROR_MESSAGE.INVALID_NUMBER_ONLY);
  }
};

const validateNumberRange = (bonusNumber) => {
  if (bonusNumber < 1 || bonusNumber > 45) {
    throw new Error(ERROR_MESSAGE.INVALID_NUMBER_RANGE);
  }
};

export const validateBonusNumber = (bonusNumber) => {
  validateNumberOnly(bonusNumber);
  validateNumberRange(bonusNumber);
};
