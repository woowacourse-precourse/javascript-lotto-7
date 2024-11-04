import { Console } from "@woowacourse/mission-utils";
import { ERROR_MESSAGE, OUTPUT_MESSAGES } from "../utils/constants.js";

const outputView = {
  printErrorMessage(message) {
    Console.print(`${ERROR_MESSAGE.ERROR_MESSAGE_PREFIX} ${message}`);
    // throw new Error(`${ERROR_MESSAGE.ERROR_MESSAGE_PREFIX} ${message}`);
  },

  printLottoCount(count) {
    Console.print(`\n${count}개를 구매했습니다.`);
  },

  printLottoNumbers(numbers) {
    Console.print(`[${numbers.join(", ")}]`);
  },

  printResults(results) {
    Console.print(OUTPUT_MESSAGES.RESULTS_HEADER);
    for (let i = 3; i <= 6; i++) {
      Console.print(OUTPUT_MESSAGES[`MATCH_${i}`](results[i]));
      if (i === 5) {
        Console.print(OUTPUT_MESSAGES.MATCH_5_BONUS(results[5.5]));
      }
    }
  },
};

export default outputView;
