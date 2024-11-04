import OutputPort from "../port/OutputPort.js";
import { MissionUtils } from "@woowacourse/mission-utils";
import Format from "./Format.js";
import { OUTPUT_PROMPT } from "../constant/Prompt.js";

const { Console } = MissionUtils;

class ConsoleOutput extends OutputPort {
  static displayNewLine() {
    Console.print("");
  }

  static displayCount(count) {
    Console.print(Format.count(count));
  }

  static displayMyLottoList(myLottoList) {
    myLottoList.forEach((myLotto) => Console.print(Format.myLotto(myLotto)));
  }

  static displayStatHeader() {
    Console.print(OUTPUT_PROMPT.STAT_HEADER);
  }

  static displayStats(rankInfo, rankCount) {
    if (rankInfo.bonus) {
      Console.print(Format.statSecond(rankInfo, rankCount));
      return;
    }
    Console.print(Format.stat(rankInfo, rankCount));
  }

  static displayRate(rate) {
    Console.print(Format.rate(rate));
  }
}

export default ConsoleOutput;
