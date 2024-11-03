import { MissionUtils } from "@woowacourse/mission-utils";
import Utils from "../Utils.js";
import OutputView from "./OutputView.js";
import { LOTTO_MESSAGES } from "../constants/lottoMessages.js";

class InputView {
  static async readLinePrice() {
    const prise = await MissionUtils.Console.readLineAsync(
      LOTTO_MESSAGES.input.money
    );
    const parsePrice = parseInt(prise, 10);

    return { prise, parsePrice };
  }

  static async readLineNumber() {
    OutputView.printNewLine();
    const input = await MissionUtils.Console.readLineAsync(
      LOTTO_MESSAGES.input.lottoNumber
    );
    const trimLotto = input.toString().trim().split(',');
    const parseLottoNumber = Utils.getParsingNumber(trimLotto);

    return { trimLotto, parseLottoNumber };
  }

  static async readLineBonusNumber() {
    OutputView.printNewLine();
    const bonusNumber = await MissionUtils.Console.readLineAsync(
      LOTTO_MESSAGES.input.bonusNumber
    );
    const parseBonusNumber = parseInt(bonusNumber, 10);

    return { bonusNumber, parseBonusNumber }
  }
}

export default InputView;
