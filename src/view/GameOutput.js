import { Console } from "@woowacourse/mission-utils";
import { MESSAGE } from "../constant/Message.js";

class GameOutput {
  printNewLotto(new_lotto) {
    Console.print(`\n${new_lotto.length}${MESSAGE.OUTPUT.PURCAHSE_LOTTO}`);
    new_lotto.forEach((lotto) => {
      Console.print(`[${lotto.join(", ")}]`);
    });
  }

  printErrorMesssage(error) {
    Console.print(error.message);
  }

  printGameResult(benefitRate, prizeStat) {
    Console.print(MESSAGE.OUTPUT.RESULT_HEADER);
    Console.print(`${MESSAGE.OUTPUT.RESULT.FIFTH} - ${prizeStat.prizeFifth}개`);
    Console.print(`${MESSAGE.OUTPUT.RESULT.FOURTH} - ${prizeStat.prizeFourth}개`);
    Console.print(`${MESSAGE.OUTPUT.RESULT.THIRD} - ${prizeStat.prizeThird}개`);
    Console.print(`${MESSAGE.OUTPUT.RESULT.SECOND} - ${prizeStat.prizeSecond}개`);
    Console.print(`${MESSAGE.OUTPUT.RESULT.FIRST} - ${prizeStat.prizeFirst}개`);
    Console.print(`${MESSAGE.OUTPUT.RESULT_PROFIT_RATE}${benefitRate}${MESSAGE.OUTPUT.RESULT_FOOTER}`);
  }
}

export default GameOutput;
