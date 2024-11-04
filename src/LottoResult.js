import { LOTTO_PRIZES } from "./constants.js";
import { Console } from "@woowacourse/mission-utils";

class LottoResult {
  #winningNumbers;
  #bonusNumber;
  #purchases;
  #matchCounts;

  constructor(winningNumbers, bonusNumber, purchases) {
    this.#winningNumbers = winningNumbers;
    this.#bonusNumber = bonusNumber;
    this.#purchases = purchases;
    this.#matchCounts = { 3: 0, 4: 0, 5: 0, 5.5: 0, 6: 0 };
    this.calculateResults();
  }

  calculateResults() {
    this.#purchases.getRandomNumbersList().forEach((purchaseNumbers) => {
      const matchCount = this.getMatchCount(purchaseNumbers);
      const isBonusMatched = purchaseNumbers.includes(this.#bonusNumber);

      if (matchCount === 6) this.#matchCounts[6] += 1;
      else if (matchCount === 5 && isBonusMatched) this.#matchCounts[5.5] += 1;
      else if (matchCount === 5) this.#matchCounts[5] += 1;
      else if (matchCount === 4) this.#matchCounts[4] += 1;
      else if (matchCount === 3) this.#matchCounts[3] += 1;
    });
  }

  getMatchCount(purchaseNumbers) {
    return purchaseNumbers.filter((number) => this.#winningNumbers.includes(number)).length;
  }

  calculateTotalPrize() {
    return (
      this.#matchCounts[6] * LOTTO_PRIZES.FIRST +
      this.#matchCounts[5.5] * LOTTO_PRIZES.SECOND +
      this.#matchCounts[5] * LOTTO_PRIZES.THIRD +
      this.#matchCounts[4] * LOTTO_PRIZES.FOURTH +
      this.#matchCounts[3] * LOTTO_PRIZES.FIFTH
    );
  }

  calculateProfitRate() {
    const totalSpent = this.#purchases.getTotalCost();
    const totalPrize = this.calculateTotalPrize();
    return Number(((totalPrize / totalSpent) * 100).toFixed(2));
  }

  printResults() {
    Console.print("\n당첨 통계\n---");
    Console.print(`3개 일치 (5,000원) - ${this.#matchCounts[3]}개`);
    Console.print(`4개 일치 (50,000원) - ${this.#matchCounts[4]}개`);
    Console.print(`5개 일치 (1,500,000원) - ${this.#matchCounts[5]}개`);
    Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.#matchCounts[5.5]}개`);
    Console.print(`6개 일치 (2,000,000,000원) - ${this.#matchCounts[6]}개`);
    Console.print(`총 수익률은 ${this.calculateProfitRate()}%입니다.`);
  }
}

export default LottoResult;