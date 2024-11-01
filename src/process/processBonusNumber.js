import { Console } from "@woowacourse/mission-utils";
import { getBonusNumber } from "../feature/UI/getUserInput.js";
import BonusNumber from "../Class/BonusNumber.js";

async function processBonusNumber(winNumbers) {
  try {
    const USER_INPUT = await getBonusNumber();
    const BONUS_NUMBER = new BonusNumber(USER_INPUT, winNumbers).getBonusNumber;
    return BONUS_NUMBER;
  } catch (error) {
    Console.print(error.message);
    return await processBonusNumber(winNumbers);
  }
}

export default processBonusNumber;