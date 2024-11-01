import { Console } from "@woowacourse/mission-utils";
import { MESSAGE } from "../constant/Message.js";

class GameOutput {
  printNewLotto(new_lotto) {
    Console.print(`\n${new_lotto.length}${MESSAGE.OUTPUT.PURCAHSE_LOTTO}`);
    new_lotto.forEach((lotto) => {
      Console.print(`[${lotto.join(", ")}]`);
    });
  }

  printGameResult(result) {
    Console.print(MESSAGE.OUTPUT.RESULT_HEADER);
    Console.print(`${MESSAGE.OUTPUT.RESULT.FIFTH} - ${result.prizeStat.prizeFifth}개`);
    Console.print(`${MESSAGE.OUTPUT.RESULT.FOURTH} - ${result.prizeStat.prizeFourth}개`);
    Console.print(`${MESSAGE.OUTPUT.RESULT.THIRD} - ${result.prizeStat.prizeThird}개`);
    Console.print(`${MESSAGE.OUTPUT.RESULT.SECOND} - ${result.prizeStat.prizeSecond}개`);
    Console.print(`${MESSAGE.OUTPUT.RESULT.FIRST} - ${result.prizeStat.prizeFirst}개`);
    Console.print(`${MESSAGE.OUTPUT.RESULT_PROFIT_RATE}${result.benefitRate}${MESSAGE.OUTPUT.RESULT_FOOTER}`);
  }

  printErrorMesssage(error) {
    Console.print(error.message);
  }
}

export default GameOutput;
