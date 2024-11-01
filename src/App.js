import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    const getLottoNumber = () => {
      return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    }

    const input = await MissionUtils.Console.readLineAsync('구입금액을 입력해 주세요.\n')
    const parseInput = parseInt(input, 10);

    // TODO 유효성 검사 분리
    // TODO 에러 메시지 상수처리
    const validate = (input) => {
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

    validate(parseInput);
    const lottoCount = getLottoCount(parseInput);

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
  }
}

export default App;
