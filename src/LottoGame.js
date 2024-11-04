import { Console, Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import { LOTTO_PRICE } from "./constants/gameRules.js";
import { getMatchingCount, isBonusMatched } from "./utils/arrayUtils.js";

class LottoGame {
  #lottoCount;
  #lottos;
  #winningNumbers;
  #bonusNumber;

  constructor(purchaseAmount, winningNumbers, bonusNumber) {
    this.#lottoCount = purchaseAmount / LOTTO_PRICE;
    this.#lottos = [];
    this.#winningNumbers = winningNumbers;
    this.#bonusNumber = bonusNumber;
  }

  get lottoCount() {
    return this.#lottoCount;
  }

  setLottos() {
    for (let i = 0; i < this.#lottoCount; i++) {
      this.#lottos.push(new Lotto(Random.pickUniqueNumbersInRange(1, 45, 6)));
    }
  }

  printLottos() {
    Console.print(`\n${this.#lottoCount}개를 구매했습니다.`);
    this.#lottos.forEach((lotto) => Console.print(lotto.getNumbersByOrder()));
  }

  determineRank(matchCount, bonusMatch) {
    if (matchCount === 6) return "first";
    if (matchCount === 5 && bonusMatch) return "second";
    if (matchCount === 5) return "third";
    if (matchCount === 4) return "fourth";
    if (matchCount === 3) return "fifth";

    return;
  }

  updateResults(results, rank) {
    results[rank] += 1;
  }

  checkResults() {
    const results = {
      first: 0,
      second: 0,
      third: 0,
      fourth: 0,
      fifth: 0,
    };

    this.#lottos.forEach((lotto) => {
      const matchCount = getMatchingCount(this.#winningNumbers, lotto.getNumbers());
      const bonusMatch = isBonusMatched(lotto.getNumbers(), this.#bonusNumber);
      const rank = this.determineRank(matchCount, bonusMatch);
      this.updateResults(results, rank);
    });

    return results;
  }

  start() {
    this.setLottos();
    this.printLottos();
  }
}

export default LottoGame;
