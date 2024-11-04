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

  // 등수 계산
  calculate() {
    const rankResult = new RankResult();

    const { lottoCount, lottos } = this.#purchaseHistory;

    lottos.forEach((lotto) => {
      let matchCount = 0;
      const lottoNumber = lotto.getNumbers();
      let hasBonus = lottoNumber.includes(this.#bonusNumber);

      this.#winningNumbers.forEach((number) => {
        if (lottoNumber.includes(number)) matchCount++;
      });

      rankResult.registerRank(matchCount, hasBonus);
    });

    rankResult.calculateProfit(lottoCount);

    return rankResult;
  }
}

export default RankCalculator;
