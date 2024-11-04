import { ERR_MESSAGE_NUMBERS } from "../../constants/errorMessages.js";

export const validPrizeArrayPass = (prizeNumbers, bonusNumber) => {
  const bonusNumberArray = [bonusNumber]
  const isIncludeBonusNum = prizeNumbers.filter((arr) => bonusNumberArray.includes(arr));

  if (isIncludeBonusNum.length !== 0) {
    throw new Error(ERR_MESSAGE_NUMBERS.IS_DUPLICATE_NUMBER);
  }
}