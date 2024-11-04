import { Random } from "@woowacourse/mission-utils";
import { MIN_LOTTERY_NUM, MAX_LOTTERY_NUM, LOTTERY_NUMBER_COUNT, LOTTERY_PRIZE } from "./constants.js";
import Lotto from "./Lotto.js";

export class LottoManager {
  #lotteryGroup;
  #lotteryResult;

  constructor() {
    this.#lotteryGroup = [];
    this.#lotteryResult = [...LOTTERY_PRIZE];
  }

  setLotteryGroup(groupSize) {
    for (let i = 0; i < groupSize; i++) {
      const numbers = Random.pickUniqueNumbersInRange(MIN_LOTTERY_NUM, MAX_LOTTERY_NUM, LOTTERY_NUMBER_COUNT);
      this.#lotteryGroup.push(new Lotto(numbers));
    }
  }

  getLotteryGroup() {
    return this.#lotteryGroup;
  }

  calculatePrize(winningNumbers, bonus) {
    this.#lotteryGroup.forEach((lotto) => {
      const { matchCount, hasBonus } = lotto.matchLottoNumbers(winningNumbers, bonus);

      if (matchCount === 5) {
        if (hasBonus) {
          this.#lotteryResult.find((el) => el.match === 5 && el.hasBonus).count++;
        } else {
          this.#lotteryResult.find((el) => el.match === 5 && !el.hasBonus).count++;
        }
      } else {
        const prize = this.#lotteryResult.find((el) => el.match === matchCount);
        if (prize) prize.count++;
      }
    });
    return this.#lotteryResult;
  }

  calculateROI(inputMoney) {
    const outputMoney = this.#lotteryResult.reduce((total, prize) => {
      return total + prize.count * prize.reward;
    }, 0);

    return Math.round((outputMoney / inputMoney) * 100 * 10) / 10;
  }
}
