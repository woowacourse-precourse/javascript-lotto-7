import { Console } from "@woowacourse/mission-utils";
import { getWinNumber } from "../feature/UI/getUserInput.js";
import Lotto from "../Lotto.js";
import processParseToArray from "./parse/processParseToArray.js";

async function processWinNumber() {
  try {
    const USER_INPUT = await getWinNumber();

    const WIN_NUMBER = processParseToArray(USER_INPUT);

    const LOTTO = new Lotto(WIN_NUMBER).getWinNumber;
    
    return LOTTO;
  } catch (error) {
    Console.print(error.message);
    return await processWinNumber();
  }
}

export default processWinNumber;