import { Console, Random } from '@woowacourse/mission-utils';
import ValidatorModule from './utils/ValidatorModules.js';
import Lotto from './Lotto.js';

const rankBoard = {
  1: { correctNumber: 6, correctBonus: false },
  2: { correctNumber: 5, correctBonus: true },
  3: { correctNumber: 5, correctBonus: false },
  4: { correctNumber: 4, correctBonus: false },
  5: { correctNumber: 3, correctBonus: false },
};

const rankPrice = {
  1: 2000000000,
  2: 30000000,
  3: 1500000,
  4: 50000,
  5: 5000,
};

class App {
  #cash;

  #numberOfLotto;

  #lottos;

  #lottoResults;

  #totalPrice;

  constructor() {
    this.#lottos = [];
    this.#lottoResults = {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
    };
    this.#totalPrice = 0;
  }

  // eslint-disable-next-line max-lines-per-function
  async run() {
    try {
      // 1. 구입 금액을 입력받는다.
      this.#cash = await Console.readLineAsync('구입금액을 입력해 주세요.\n');
      ValidatorModule.checkPurchaseCash(this.#cash);

      // 2. 구매된 로또 매수를 출력한다.
      this.#numberOfLotto = this.#cash / 1000;
      Console.print(`${this.#numberOfLotto}개를 구매했습니다.`);

      // 3. 매수 만큼 6개의 랜덤한 숫자로 이루어진 정수 배열을 출력한다.
      for (let i = 0; i < this.#numberOfLotto; i += 1) {
        const randomNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);
        const sortedNumbers = randomNumbers.sort((a, b) => a - b);
        const lottoInstance = new Lotto(sortedNumbers);
        this.#lottos.push(lottoInstance);

        Console.print(`[${lottoInstance.getNumbers().join(', ')}]`);
      }

      // 4. 당첨 번호를 입력받는다.
      const winnerNumberInput = await Console.readLineAsync('\n당첨 번호를 입력해 주세요.\n');
      const winnerNumbers = winnerNumberInput.split(',').map((num) => Number(num));
      ValidatorModule.checkLottoNumbers(winnerNumbers);

      // 5. 보너스 번호를 입력받는다.
      const winnerBonusInput = await Console.readLineAsync('\n보너스 번호를 입력해 주세요.\n');
      const winnerBonus = Number(winnerBonusInput);
      ValidatorModule.checkBonusNumber(winnerNumbers, winnerBonus);

      // 6. 당첨 통계를 출력한다.
      // 당첨 통계 계산
      this.#lottos.forEach((lotto) => {
        const correctCount = lotto.getNumberOfSameNumber(winnerNumbers);
        const isCorrectBonus = lotto.getIsIncludesNumber(winnerBonus);

        if (correctCount == 6) {
          this.#lottoResults[1] += 1;
          this.#totalPrice += rankPrice[1];
        } else if (correctCount == 5 && isCorrectBonus) {
          this.#lottoResults[2] += 1;
          this.#totalPrice += rankPrice[2];
        } else if (correctCount == 5) {
          this.#lottoResults[3] += 1;
          this.#totalPrice += rankPrice[3];
        } else if (correctCount == 4) {
          this.#lottoResults[4] += 1;
          this.#totalPrice += rankPrice[4];
        } else if (correctCount == 3) {
          this.#lottoResults[5] += 1;
          this.#totalPrice += rankPrice[5];
        }
      });

      // 당첨 출력
      Console.print('\n당첨 통계\n---');
      Object.keys(rankPrice)
        .reverse()
        .forEach((rank) => {
          const { correctNumber, correctBonus } = rankBoard[rank];
          const price = rankPrice[rank].toLocaleString();

          if (correctBonus) {
            Console.print(
              `${correctNumber}개 일치, 보너스 볼 일치 (${price}원) - ${this.#lottoResults[rank]}개`,
            );
          } else {
            Console.print(`${correctNumber}개 일치 (${price}원) - ${this.#lottoResults[rank]}개`);
          }
        });

      // 7. 총 수익률을 출력한다.
      const earningRate = ((this.#totalPrice / this.#cash) * 100).toFixed(1);
      Console.print(`총 수익률은 ${earningRate}%입니다.`);
    } catch (error) {
      Console.print(error.message);
      return error;
    }
  }
}

export default App;
