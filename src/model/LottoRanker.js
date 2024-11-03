import { PRIZE } from "../constants";

class LottoRanker {
  #nums;
  #bonusNumber;

  constructor(nums, bonusNum) {
    this.winning = { 3: 0, 4: 0, 5: 0, 5.5: 0, 6: 0 };
    this.#nums = nums;
    this.#bonusNumber = bonusNum;
  }

  #findMatches(lotto) {
    let countMatchedNums = lotto.filter((number) =>
      this.#nums.includes(number)
    ).length;

    if (countMatchedNums === 5 && lotto.includes(this.#bonusNumber)) {
      countMatchedNums += 0.5;
    }

    return countMatchedNums;
  }

  countWinning(lottos) {
    for (let i = 0; i < lottos.length; i++) {
      const num = this.#findMatches(lottos[i].getNumbers());

      if (this.winning.hasOwnProperty(num)) {
        this.winning[num]++;
      }
    }

    return this.winning;
  }

  calculateReturnRate(payment) {
    const totalPrize = Object.entries(this.winning).reduce(
      (total, [rank, count]) => {
        return total + count * PRIZE[rank];
      },
      0
    );
    const returnRate = ((totalPrize / payment) * 100).toFixed(1);

    return returnRate;
  }
}

export default LottoRanker;
