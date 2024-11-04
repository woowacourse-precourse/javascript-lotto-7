import {
  BONUS_ERROR_INTEGER,
  BONUS_ERROR_NUMBER,
  BONUS_RANGE_ERROR,
  END_NUMBER,
  START_NUMBER,
  ZERO,
} from "../Constant.js";

export const isValidBonus = (bonusNumber) => {
  if (bonusNumber < START_NUMBER || bonusNumber > END_NUMBER) {
    throw new Error(BONUS_RANGE_ERROR);
  }
  if (isNaN(bonusNumber)) {
    throw new Error(BONUS_ERROR_NUMBER);
  }
  if (bonusNumber % 1 !== ZERO) {
    throw new Error(BONUS_ERROR_INTEGER);
  }
};
