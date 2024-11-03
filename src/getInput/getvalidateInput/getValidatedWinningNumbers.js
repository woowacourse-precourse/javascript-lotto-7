import getWinningNumbers from "../getWinningNumbers.js";
import validateWinningNumbers from "../../validate/validateWinningNumbers.js";
import { Console } from "@woowacourse/mission-utils";

export default async function getValidatedWinningNumbers() {
  try {
    const winningNumbers = await getWinningNumbers();
    validateWinningNumbers(winningNumbers);
    Console.print("");
    return winningNumbers;
  } catch (error) {
    Console.print(error.message);
    return await getValidatedWinningNumbers();
  }
}
