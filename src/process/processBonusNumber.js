import { Console } from "@woowacourse/mission-utils";
import { getBonusNumber } from "../feature/UI/getUserInput";
import BonusNumber from "../Class/BonusNumber";

async function processBonusNumber() {
  try {
    const USER_INPUT = await getBonusNumber();
    const BONUS_NUMBER = new BonusNumber(USER_INPUT).getBonusNumber;
    return BONUS_NUMBER;
  } catch (error) {
    Console.print(error.message);
    processBonusNumber();
  }
}

export default processBonusNumber;