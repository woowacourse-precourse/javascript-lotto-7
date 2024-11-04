import { Console } from "@woowacourse/mission-utils";
import { getWinNumber } from "../feature/UI/getUserInput.js";
import { parseToArray, parseToNumberArray } from "../feature/parse/parseArray.js";
import Lotto from "../Lotto.js";
import checkDecimal from "../feature/validate/checkDecimal.js";
import { checkEmptyArguments } from "../feature/validate/checkEmptyInput.js";

async function processWinNumber() {
  try {
    const USER_INPUT = await getWinNumber();
    checkDecimal(USER_INPUT);

    const PARSED_TO_ARRAY = parseToArray(USER_INPUT);
    checkEmptyArguments(PARSED_TO_ARRAY);

    const WIN_NUMBER = parseToNumberArray(PARSED_TO_ARRAY);
    const LOTTO = new Lotto(WIN_NUMBER).getWinNumber;
    
    return LOTTO;
  } catch (error) {
    Console.print(error.message);
    return await processWinNumber();
  }
}

export default processWinNumber;