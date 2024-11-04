import { RANK_INFO, SERVICE_CONSTANTS } from '../constants.js';
import InputModules from '../views/InputModules.js';
import OutputModules from '../views/OutputModules.js';
import Lotto from '../models/Lotto.js';
import RandomUtil from '../utils/Random.js';

class LottoController {
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

  async execute() {
    this.#cash = await InputModules.getPurchaseCash();

    this.#numberOfLotto = this.#cash / SERVICE_CONSTANTS.standardUnitAmount;
    OutputModules.printMessage(`${this.#numberOfLotto}개를 구매했습니다.`);

    this.#createLottos();
    OutputModules.printLottos(this.#lottos);

    this.#winnerNumbers = await InputModules.getLottoWinnerNumbers();
    this.#winnerBonus = await InputModules.getLottoWinnerBonusNumber(this.#winnerNumbers);

    this.#lottos.forEach((lotto) => this.#aggregateLottoResult(lotto));

    OutputModules.printMessage('\n당첨 통계\n---');
    this.#displayRankedLottoResults();

    OutputModules.printEarningRate(this.#totalPrice, this.#cash);
  }

  #createLottos() {
    this.#lottos = Array.from({ length: this.#numberOfLotto }, () => {
      const randomNumbers = RandomUtil.getRandomNumbers();
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

    if (correctCount == RANK_INFO[2].correctCount && isCorrectBonus) this.#aggregateLottoResult(2);

    if (correctCount >= RANK_INFO[Object.keys(RANK_INFO).length].correctNumber) {
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

export default LottoController;
