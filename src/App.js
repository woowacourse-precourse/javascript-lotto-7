import { Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
import InputModules from './views/InputModules.js';
import OutputModules from './views/OutputModules.js';
import { RANK_INFO } from './constants.js';

class App {
  #cash;
  #numberOfLotto;
  #winnerNumbers;
  #winnerBonus;
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

  async run() {
    try {
      // 1. 구입 금액을 입력받는다.
      this.#cash = await InputModules.getPurchaseCash();

      // 2. 구매된 로또 매수를 출력한다.
      this.#numberOfLotto = this.#cash / 1000;
      OutputModules.printMessage(`${this.#numberOfLotto}개를 구매했습니다.`);

      // 3. 매수 만큼 6개의 랜덤한 숫자로 이루어진 정수 배열을 출력한다.
      this.#createLottos();
      OutputModules.printLottos(this.#lottos);

      // 4. 당첨 번호를 입력받는다.
      this.#winnerNumbers = await InputModules.getLottoWinnerNumbers();

      // 5. 보너스 번호를 입력받는다.
      this.#winnerBonus = await InputModules.getLottoWinnerBonusNumber(this.#winnerNumbers);

      // 6. 당첨 통계를 출력한다.
      // 당첨 통계 계산
      this.#lottos.forEach((lotto) => this.#aggregateLottoResult(lotto));

      // 당첨 출력
      OutputModules.printMessage('\n당첨 통계\n---');
      this.#displayRankedLottoResults();

      // 7. 총 수익률을 출력한다.
      OutputModules.printEarningRate(this.#totalPrice, this.#cash);
    } catch (error) {
      OutputModules.printMessage(error.message);
      return error;
    }
  }

  #createLottos() {
    this.#lottos = Array.from({ length: this.#numberOfLotto }, () => {
      const randomNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      const sortedNumbers = randomNumbers.sort((a, b) => a - b);
      return new Lotto(sortedNumbers);
    });
  }

  #displayRankedLottoResults() {
    const rankDescend = Object.keys(RANK_INFO).reverse();

    rankDescend.forEach((rank) => {
      OutputModules.printRankStatus(rank, this.#lottoResults[rank]);
    });
  }

  #aggregateLottoResult(lotto) {
    const correctCount = lotto.getNumberOfSameNumber(this.#winnerNumbers);
    const isCorrectBonus = lotto.getIsIncludesNumber(this.#winnerBonus);

    if (correctCount == 5 && isCorrectBonus) this.#aggregateLottoResult(2);

    if (correctCount > 2) {
      const rankIndex =
        Object.keys(RANK_INFO).findIndex(
          (key) =>
            RANK_INFO[key].correctNumber == correctCount && RANK_INFO[key].correctBonus == false,
        ) + 1;

      this.#updateLottoResult(rankIndex);
    }
  }

  #updateLottoResult(rank) {
    this.#lottoResults[rank] += 1;
    this.#totalPrice += RANK_INFO[rank].price;
  }
}

export default App;
