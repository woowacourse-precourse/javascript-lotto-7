import { ERROR, MESSAGES } from "../../config/config.js";
import { checkDuplicates } from "../checkDuplicates.js";
import { inputHandler } from "../../handlers/inputHandler.js";

export const inputBonus = async (winningNumbers) => {
  const bonus = await inputHandler(MESSAGES.INPUT_BONUS_NUM);

  if (bonus === "") {
    throw new Error(ERROR.INPUT_EMPTY);
  }
  
  if (isNaN(bonus) || bonus < 1 || bonus > 45) {
    throw new Error(ERROR.INVALID_NUMBER);
  }

  try {
    checkDuplicates(winningNumbers, bonus);
  } catch (e) {
    throw new Error(e.message);
  }

  return bonus;
};