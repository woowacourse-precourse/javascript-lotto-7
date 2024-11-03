import getBonusNumber from "../getBonusNumber.js";
import validateBonusNumber from "../../validate/validateBonusNumber.js";
import { Console } from "@woowacourse/mission-utils";

export default async function getValidatedBonusNumber(winningNumbers) {
  try {
    const bonusNumber = await getBonusNumber();
    validateBonusNumber(bonusNumber, winningNumbers);
    Console.print("");
    return bonusNumber;
  } catch (error) {
    Console.print(error.message);
    return await getValidatedBonusNumber(winningNumbers);
  }
}
