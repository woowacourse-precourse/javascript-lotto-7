import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    const getLottoNumber = () => {
      return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    }

    const inputPrice = await MissionUtils.Console.readLineAsync('구입금액을 입력해 주세요.\n')
    const parseInputPrice = parseInt(inputPrice, 10);

    // TODO 유효성 검사 분리
    // TODO 에러 메시지 상수처리
    const validateInputPrice = (input) => {
      if (typeof input !== 'number') {
        throw new Error('[ERROR] 입력값이 올바르지 않습니다.')
      }
      if (input < 1000) {
        throw new Error('[ERROR] 최소 1,000원 이상 입력해야 합니다.')
      }
      if (input % 1000 !== 0) {
        throw new Error('[ERROR] 입력값이 1,000원 단위로 나누어 떨어지지 않습니다.')
      }
    }

    const getLottoCount = (number) => {
      return number / 1000;
    }

    validateInputPrice(parseInputPrice);
    const lottoCount = getLottoCount(parseInputPrice);

    const range = (count, value) => Array(count).fill(value || '');

    const compareNumbers = (a, b) => a - b;

    const getSortNumber = (array) => array.sort(compareNumbers);

    const printLotto = (count) => {
      MissionUtils.Console.print(`${lottoCount}개를 구매했습니다.\n`);

      const totalLottoArray = range(count, []);

      const createLotto = totalLottoArray.map(() => {
        const lotto = getLottoNumber();
        const result = getSortNumber(lotto);
        MissionUtils.Console.print(`[${result}]`);
      });
    }

    printLotto(lottoCount);

    const inputNumber = await MissionUtils.Console.readLineAsync('당첨 번호를 입력해 주세요.\n');
    const trimNumber = inputNumber.toString().trim().split(',');

    const getParsingNumber = (array) => {
      return array.map((el) => parseInt(el, 10));
    }

    const parseNumber = getParsingNumber(trimNumber);
    console.log(parseNumber);

    const validateInputNumber = (input) => {
      if (input.length !== 6) {
        throw new Error('[ERROR] 당첨 번호는 6개 입력해야 합니다.')
      }
      input.forEach((number) => {
        if (number <= 0 || number >= 46) {
          throw new Error('[ERROR] 당첨 번호는 1~45 사이의 숫자만 입력해야 합니다.')
        }
      });
      input.forEach((number) => {
        if (Number.isNaN(number)) {
          throw new Error('[ERROR] 당첨 번호는 숫자만 입력할 수 있습니다.')
        }
      });
    }

    validateInputNumber(parseNumber);
  }
}

export default App;
