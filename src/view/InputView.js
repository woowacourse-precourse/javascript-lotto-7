import { MissionUtils } from "@woowacourse/mission-utils";
import Validator from "../Validator.js";
import Utils from "../Utils.js";
import OutputView from "./OutputView.js";

class InputView {
  static async readLinePrice() {
    const input = await MissionUtils.Console.readLineAsync('구입금액을 입력해 주세요.\n')
    const inputPrice = parseInt(input, 10);

    Validator.validatePrice(input);
    Validator.validateParsePrice(inputPrice);

    return inputPrice;
  }

  static async readLineNumber() {
    OutputView.printNewLine();
    const input = await MissionUtils.Console.readLineAsync('당첨 번호를 입력해 주세요.\n');
    const trimLotto = input.toString().trim().split(',');
    const parseLottoNumber = Utils.getParsingNumber(trimLotto);

    // Validator.validateNumber(trimInput);
    // Validator.validateParseNumber(parseNumber);

    return { trimLotto, parseLottoNumber };
  }

  static async readLineBonusNumber() {
    OutputView.printNewLine();
    const input = await MissionUtils.Console.readLineAsync('보너스 번호를 입력해 주세요.\n');
    const parseBonusNumber = parseInt(input, 10);

    Validator.validateBonusNumber(input);
    Validator.validateParseBonusNumber(parseBonusNumber);

    return parseBonusNumber;
  }
}

export default InputView;
