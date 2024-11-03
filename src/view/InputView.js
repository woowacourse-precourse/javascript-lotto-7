import { MissionUtils } from "@woowacourse/mission-utils";
import Utils from "../Utils.js";
import OutputView from "./OutputView.js";

class InputView {
  static async readLinePrice() {
    const prise = await MissionUtils.Console.readLineAsync('구입금액을 입력해 주세요.\n')
    const parsePrice = parseInt(prise, 10);

    return { prise, parsePrice };
  }

  static async readLineNumber() {
    OutputView.printNewLine();
    const input = await MissionUtils.Console.readLineAsync('당첨 번호를 입력해 주세요.\n');
    const trimLotto = input.toString().trim().split(',');
    const parseLottoNumber = Utils.getParsingNumber(trimLotto);

    return { trimLotto, parseLottoNumber };
  }

  static async readLineBonusNumber() {
    OutputView.printNewLine();
    const bonusNumber = await MissionUtils.Console.readLineAsync('보너스 번호를 입력해 주세요.\n');
    const parseBonusNumber = parseInt(bonusNumber, 10);

    return { bonusNumber, parseBonusNumber }
  }
}

export default InputView;
