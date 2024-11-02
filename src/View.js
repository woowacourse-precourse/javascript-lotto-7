import { MissionUtils } from "@woowacourse/mission-utils";
import Validator from "./Validator.js";
import LottoUtils from "./LottoUtils.js";

class View {
  static async readLinePrice() {
    const input = await MissionUtils.Console.readLineAsync('구입금액을 입력해 주세요.\n')
    const inputPrice = parseInt(input, 10);

    Validator.validateInputPrice(inputPrice);

    return inputPrice;
  }

  static printLotto(count) {
    this.printNewLine();
    MissionUtils.Console.print(`${count}개를 구매했습니다.`);

    const totalLottoArray = LottoUtils.range(count, []);

    totalLottoArray.map(() => {
      const lotto = LottoUtils.getLottoNumber();
      const result = LottoUtils.getSortNumber(lotto);
      MissionUtils.Console.print(`[${result}]`);
    });
  }

  static async readLineNumber() {
    this.printNewLine();
    const input = await MissionUtils.Console.readLineAsync('당첨 번호를 입력해 주세요.\n');
    const trimInput = input.toString().trim().split(',');
    const parseNumber = LottoUtils.getParsingNumber(trimInput);

    Validator.validateInputNumber(parseNumber);

    return parseNumber;
  }

  static async readLineBonusNumber() {
    this.printNewLine();
    const inputBonusNumber = await MissionUtils.Console.readLineAsync('보너스 번호를 입력해 주세요.\n');
    const parseBonusNumber = parseInt(inputBonusNumber, 10);

    Validator.validateBonusNumber(inputBonusNumber);
    Validator.validateParseBonusNumber(parseBonusNumber);

    return parseBonusNumber;
  }

  static printNewLine() {
    MissionUtils.Console.print('');
  }
}

export default View;
