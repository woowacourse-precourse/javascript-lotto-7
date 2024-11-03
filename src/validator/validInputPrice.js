import { emptyOrIsNum } from "./function/validEmptyOrIsNum.js";
import { isPositiveNumber } from "./function/validIsPositiveNum.js";
import { limitMaxDigitNum } from "./function/validLimitMaxDigitNum.js";
import { limitRangeNum } from "./function/validLimitRangeNum.js";
import { kiloUnitNum } from "./function/validKiloUnitNum.js";
import { ERR_MESSAGE_NUMBERS } from "../constants/errorMessages.js";

export const validInputPrice = (inputPrice) => {
  try {
    emptyOrIsNum(inputPrice);
    isPositiveNumber(inputPrice);
    limitMaxDigitNum(inputPrice, 6, ERR_MESSAGE_NUMBERS.LIMIT_LENGTH_PRICE_NUMBER);
    limitRangeNum(inputPrice, 1000, 100000, ERR_MESSAGE_NUMBERS.LIMIT_RANGE_PRICE_NUMBER);
    kiloUnitNum(inputPrice);
    return true;
  } catch (error) {
    console.error(`${error.message}`);
    return false;
  }
};