import { emptyOrIsNum } from "./function/validEmptyOrIsNum.js";
import { isPositiveNumber } from "./function/validIsPositiveNum.js";
import { limitMaxDigitNum } from "./function/validLimitMaxDigitNum.js";
import { limitRangeNum } from "./function/validLimitRangeNum.js";
import { kiloUnitNum } from "./function/validKiloUnitNum.js";

export const validInputPrice = (inputPrice) => {
  try {
    emptyOrIsNum(inputPrice);
    isPositiveNumber(inputPrice);
    limitMaxDigitNum(inputPrice, 6);
    limitRangeNum(inputPrice, 1000, 100000);
    kiloUnitNum(inputPrice);
    return true;
  } catch (error) {
    console.error(`${error.message}`);
    return false;
  }
};