import { MissionUtils } from "@woowacourse/mission-utils";
import Validator from "./Validator.js";

class App {
  async run() {
    const getLottoNumber = () => {
      return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    }

    const inputPrice = await MissionUtils.Console.readLineAsync('구입금액을 입력해 주세요.\n')
    const parseInputPrice = parseInt(inputPrice, 10);

    const getLottoCount = (number) => {
      return number / 1000;
    }

    Validator.validateInputPrice(parseInputPrice);
    const lottoCount = getLottoCount(parseInputPrice);

    const range = (count, value) => Array(count).fill(value || '');

    const compareNumbers = (a, b) => a - b;

    const getSortNumber = (array) => array.sort(compareNumbers);

    const printLotto = (count) => {
      MissionUtils.Console.print(`\n${lottoCount}개를 구매했습니다.`);

      const totalLottoArray = range(count, []);

      const createLotto = totalLottoArray.map(() => {
        const lotto = getLottoNumber();
        const result = getSortNumber(lotto);
        MissionUtils.Console.print(`[${result}]`);
      });
    }

    printLotto(lottoCount);

    const inputNumber = await MissionUtils.Console.readLineAsync('\n당첨 번호를 입력해 주세요.\n');
    const trimNumber = inputNumber.toString().trim().split(',');

    const getParsingNumber = (array) => {
      return array.map((el) => parseInt(el, 10));
    }

    const parseNumber = getParsingNumber(trimNumber);

    Validator.validateInputNumber(parseNumber);

    const inputBonusNumber = await MissionUtils.Console.readLineAsync('\n보너스 번호를 입력해 주세요.\n');
    const parseBonusNumber = parseInt(inputBonusNumber, 10);

    Validator.validateBonusNumber(inputBonusNumber);
    Validator.validateParseBonusNumber(parseBonusNumber);
  }
}

export default App;
