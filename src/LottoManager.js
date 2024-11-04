import { Random } from "@woowacourse/mission-utils";
import { MIN_LOTTERY_NUM, MAX_LOTTERY_NUM, LOTTERY_NUMBER_COUNT, LOTTERY_PRIZE } from "./constants.js";
import Lotto from "./Lotto.js";

export class LottoManager {
  #lotteryGroup;
  #lotteryResult;

  constructor() {
    this.#lotteryGroup = [];
    this.#lotteryResult = structuredClone(LOTTERY_PRIZE); // 깊은 복사
  }

  setLotteryGroup(groupSize) {
    for (let i = 0; i < groupSize; i++) {
      const numbers = Random.pickUniqueNumbersInRange(MIN_LOTTERY_NUM, MAX_LOTTERY_NUM, LOTTERY_NUMBER_COUNT);
      this.#lotteryGroup.push(new Lotto(numbers));
    }
  }

  getLotteryGroup() {
    // 각 Lotto 객체의 numbers를 새로운 Lotto 객체로 생성하여 반환
    return this.#lotteryGroup.map((lotto) => new Lotto(lotto.getLottoNumbers()));
  }

  getLotteryResult() {
    return structuredClone(this.#lotteryResult); // 깊은 복사
  }

  calculatePrize(winningNumbers, bonus) {
    this.#lotteryGroup.forEach((lotto) => {
      const { matchCount, hasBonus } = lotto.matchLottoNumbers(winningNumbers, bonus);

      if (matchCount === 5) {
        if (hasBonus) {
          this.#lotteryResult.find((res) => res.match === 5 && res.hasBonus).count++;
        } else {
          this.#lotteryResult.find((res) => res.match === 5 && !res.hasBonus).count++;
        }
      } else {
        const prize = this.#lotteryResult.find((res) => res.match === matchCount);
        if (prize) prize.count++;
      }
    });
    return structuredClone(this.#lotteryResult); // 깊은 복사
  }

  calculateROI(inputMoney) {
    const outputMoney = this.#lotteryResult.reduce((total, prize) => {
      return total + prize.count * prize.reward;
    }, 0);

    const ratio = (outputMoney / inputMoney) * 100;
    const formattedRatio = new Intl.NumberFormat("ko-KR", {
      minimumFractionDigits: 1,
      maximumFractionDigits: 1,
    }).format(ratio);

    return `${formattedRatio}%`;
  }
}
