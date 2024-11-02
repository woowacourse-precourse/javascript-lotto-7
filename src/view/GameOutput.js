import { Console } from "@woowacourse/mission-utils";
import { MESSAGE } from "../constant/Message.js";

class GameOutput {
  printNewLotto(new_lotto) {
    Console.print(`\n${new_lotto.length}${MESSAGE.OUTPUT.PURCAHSE_LOTTO}`);
    const format_lotto = new_lotto.map((lotto) => `[${lotto.join(", ")}]`).join("\n");
    Console.print(format_lotto);
  }

  printGameResult(result) {
    const REGEX = /\B(?=(\d{3})+(?!\d))/g;
    const format_benefit_rate = result.benefitRate.toString().replace(REGEX, ",");
    Console.print(MESSAGE.OUTPUT.RESULT_HEADER);
    Console.print(`${MESSAGE.OUTPUT.RESULT.FIFTH} - ${result.prizeStat.prizeFifth}개`);
    Console.print(`${MESSAGE.OUTPUT.RESULT.FOURTH} - ${result.prizeStat.prizeFourth}개`);
    Console.print(`${MESSAGE.OUTPUT.RESULT.THIRD} - ${result.prizeStat.prizeThird}개`);
    Console.print(`${MESSAGE.OUTPUT.RESULT.SECOND} - ${result.prizeStat.prizeSecond}개`);
    Console.print(`${MESSAGE.OUTPUT.RESULT.FIRST} - ${result.prizeStat.prizeFirst}개`);
    Console.print(`${MESSAGE.OUTPUT.RESULT_PROFIT_RATE}${format_benefit_rate}${MESSAGE.OUTPUT.RESULT_FOOTER}`);
  }

  printErrorMesssage(error) {
    Console.print(error.message);
  }
}

export default GameOutput;
