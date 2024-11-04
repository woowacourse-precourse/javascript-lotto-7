import { Console, Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import { LOTTO_PRICE, WINNING_AMOUNT } from "./constants/gameRules.js";
import { arrayToString, getMatchingCount, isBonusMatched } from "./utils/arrayUtils.js";

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
    this.#lottos.forEach((lotto) => Console.print(arrayToString(lotto.getNumbersByOrder())));
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
    if (!results[rank] && results[rank] !== 0) return;
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

  getRateOfReturn(results) {
    const keys = Object.keys(results);
    let winningAmount = 0;
    keys.forEach((key) => {
      winningAmount += results[key] * WINNING_AMOUNT[key];
    });

    return (winningAmount / (this.#lottoCount * 1000)) * 100;
  }

  printResults() {
    const results = this.checkResults();
    const winningAmount = this.getRateOfReturn(results).toFixed(1);
    const resultsMessage = `
당첨 통계
---
3개 일치 (5,000원) - ${results.fifth}개
4개 일치 (50,000원) - ${results.fourth}개
5개 일치 (1,500,000원) - ${results.third}개
5개 일치, 보너스 볼 일치 (30,000,000원) - ${results.second}개
6개 일치 (2,000,000,000원) - ${results.first}개
총 수익률은 ${winningAmount}%입니다.
`;
    Console.print(resultsMessage);
  }

  start() {
    this.setLottos();
    this.printLottos();
    this.printResults();
  }
}

export default LottoGame;
