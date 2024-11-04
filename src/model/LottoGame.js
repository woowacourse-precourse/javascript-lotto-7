import Lotto from './Lotto.js';
import { CONFIG, RANK } from '../constants/constants.js';
import { Random } from '@woowacourse/mission-utils';

class LottoGame {
  #generator;
  #lottoNumbers = [];
  #matchCount;

  constructor(
    purchaseAmount,
    generator = () =>
      Random.pickUniqueNumbersInRange(
        CONFIG.LOTTO_MIN_NUMBER,
        CONFIG.LOTTO_MAX_NUMBER,
        CONFIG.LOTTO_COUNT
      )
  ) {
    this.#generator = generator;

    this.#lottoNumbers = Array.from(
      { length: purchaseAmount / CONFIG.PURCHASE_AMOUNT_UNIT },
      () => {
        const numbers = this.#generator();
        return new Lotto(numbers);
      }
    );

    this.#matchCount = {
      [RANK.FIRST.matchCount]: 0,
      [RANK.SECOND.matchCount]: 0,
      [RANK.THIRD.matchCount]: 0,
      [RANK.FOURTH.matchCount]: 0,
      [RANK.FIFTH.matchCount]: 0,
    };
  }

  getLottoNumbers() {
    return this.#lottoNumbers;
  }

  calculatePrize(winningNumbers, bonusNumber) {
    this.#lottoNumbers.forEach((lotto) => {
      const matchCount = lotto.getMatchCount({ winningNumbers, bonusNumber });
      if (matchCount >= RANK.FIFTH.matchCount) {
        this.#matchCount[matchCount] += 1;
      }
    });

    return this.#matchCount;
  }

  getPrizeAmount(count) {
    switch (count) {
      case RANK.FIRST.matchCount:
        return RANK.FIRST.prize;
      case RANK.SECOND.matchCount:
        return RANK.SECOND.prize;
      case RANK.THIRD.matchCount:
        return RANK.THIRD.prize;
      case RANK.FOURTH.matchCount:
        return RANK.FOURTH.prize;
      case RANK.FIFTH.matchCount:
        return RANK.FIFTH.prize;
      default:
        return 0;
    }
  }

  calculateRevenue() {
    const totalPrize = Object.entries(this.#matchCount).reduce(
      (acc, [count, value]) => {
        const prizeAmount = this.getPrizeAmount(Number(count));
        return acc + prizeAmount * value;
      },
      0
    );

    const revenue =
      (totalPrize / (this.#lottoNumbers.length * CONFIG.PURCHASE_AMOUNT_UNIT)) *
      100;
    return Math.round(revenue * 100) / 100;
  }
}

export default LottoGame;
