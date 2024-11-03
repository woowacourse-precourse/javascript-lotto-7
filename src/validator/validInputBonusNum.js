import { emptyOrIsNum } from "./function/validEmptyOrIsNum.js";
import { isPositiveNumber } from "./function/validIsPositiveNum.js";
import { limitMaxDigitNum } from "./function/validLimitMaxDigitNum.js";
import { limitRangeNum } from "./function/validLimitRangeNum.js";
import { ERR_MESSAGE_NUMBERS } from "../constants/errorMessages.js";

export const validInputBonusNum = (inputBonusNumber) => {
  try {
    emptyOrIsNum(inputBonusNumber);
    isPositiveNumber(inputBonusNumber);
    limitMaxDigitNum(inputBonusNumber, 2, ERR_MESSAGE_NUMBERS.LIMIT_LENGTH_BONUS_NUMBER);
    limitRangeNum(inputBonusNumber, 1, 45, ERR_MESSAGE_NUMBERS.LIMIT_RANGE_BONUS_NUMBER);
    return true;
  } catch (error) {
    console.error(`${error.message}`);
    return false;
  }
};