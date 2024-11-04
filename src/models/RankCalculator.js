import RankResult from "./RankResult.js";

class RankCalculator {
  #purchaseHistory;
  #winningNumbers;
  #bonusNumber;

  constructor(purchaseHistory, winningNumbers, bonusNumber) {
    this.#purchaseHistory = purchaseHistory;
    this.#winningNumbers = winningNumbers;
    this.#bonusNumber = bonusNumber;
  }

  calculate() {
    const rankResult = new RankResult();
    const { lottoCount, lottos } = this.#purchaseHistory;

    lottos.forEach((lotto) => {
      this.#calculateMatch(lotto, rankResult);
    });

    rankResult.calculateProfit(lottoCount);

    return rankResult;
  }

  #calculateMatch(lotto, rankResult) {
    const lottoNumber = lotto.getNumbers();
    const { matchCount, hasBonus } = this.#checkMatch(lottoNumber);
    rankResult.registerRank(matchCount, hasBonus);
  }

  #checkMatch(lottoNumber) {
    let matchCount = 0;
    let hasBonus = lottoNumber.includes(this.#bonusNumber);

    this.#winningNumbers.forEach((number) => {
      if (lottoNumber.includes(number)) matchCount += 1;
    });

    return { matchCount, hasBonus };
  }
}

export default RankCalculator;
