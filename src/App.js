import { Console, Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';

class App {
  #cash;

  #numberOfLotto;

  #lottos;

  #lottoResults;

  constructor() {
    this.#lottos = [];
    this.#lottoResults = {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
    };
  }

  // eslint-disable-next-line max-lines-per-function
  async run() {
    // 1. 구입 금액을 입력받는다.
    this.#cash = await Console.readLineAsync('구입금액을 입력해 주세요.\n');

    // 2. 구매된 로또 매수를 출력한다.
    this.#numberOfLotto = this.#cash / 1000;
    Console.print(`\n${this.#numberOfLotto}개를 구매했습니다.`);

    // 3. 매수 만큼 6개의 랜덤한 숫자로 이루어진 정수 배열을 출력한다.
    for (let i = 0; i < this.#numberOfLotto; i += 1) {
      const randomNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      const sortedNumbers = randomNumbers.sort((a, b) => a - b);
      this.#lottos.push(sortedNumbers);

      Console.print(sortedNumbers);
    }

    // 4. 당첨 번호를 입력받는다.
    const winnerNumberInput = await Console.readLineAsync('\n당첨 번호를 입력해 주세요.\n');
    const winnerNumbers = winnerNumberInput.split(',').map((num) => Number(num));

    // 5. 보너스 번호를 입력받는다.
    const winnerBonusInput = await Console.readLineAsync('\n보너스 번호를 입력해 주세요.\n');
    const winnerBonus = Number(winnerBonusInput);

    // 6. 당첨 통계를 출력한다.
    // 당첨 통계 계산
    this.#lottos.forEach((lotto) => {
      const correctCount = lotto.filter((element) => winnerNumbers.includes(element)).length;
      const isCorrectBonus = lotto.includes(winnerBonus);

      if (correctCount == 6) {
        this.#lottoResults[1] += 1;
      } else if (correctCount == 5 && isCorrectBonus) {
        this.#lottoResults[2] += 1;
      } else if (correctCount == 5) {
        this.#lottoResults[3] += 1;
      } else if (correctCount == 4) {
        this.#lottoResults[4] += 1;
      } else if (correctCount == 3) {
        this.#lottoResults[5] += 1;
      }
    });
  }
}

export default App;
