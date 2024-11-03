import Lotto from './Lotto.js';
import generateRandomList from '../utils/generateRandomList.js';
import { CONFIG, RANK } from '../constants/constants.js';

class LottoGame {
  #generator;
  #lottoNumbers = [];
  #matchCount;

  constructor(purchaseAmount, generator = () => generateRandomList()) {
    const tickets = purchaseAmount / CONFIG.PURCHASE_AMOUNT_UNIT;
    this.#generator = generator;
    this.#lottoNumbers = Array.from({ length: tickets }, () => {
      const numbers = this.#generator();
      return new Lotto([...numbers].sort((a, b) => a - b));
    });
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
}

export default LottoGame;
