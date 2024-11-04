import InputPort from "../port/InputPort.js";
import { MissionUtils } from "@woowacourse/mission-utils";
import { INPUT_PROMPT } from "../constant/Prompt.js";

const { Console } = MissionUtils;

class ConsoleInput extends InputPort {
  static async readCost() {
    return await Console.readLineAsync(INPUT_PROMPT.COST);
  }

  static async readWinningLotto() {
    return await Console.readLineAsync(INPUT_PROMPT.WINNING_LOTTO);
  }

  static async readBonusNumber() {
    return await Console.readLineAsync(INPUT_PROMPT.BONUS_NUMBER);
  }
}

export default ConsoleInput;
