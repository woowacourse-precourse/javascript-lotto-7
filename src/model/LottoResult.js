import LottoComparer from './LottoComparer.js';
import { PRIZE, INITIAL_RANK, PRIZE_KEYS } from '../contents/PrizeContents.js';
import { LOTTO_PRICE } from '../contents/PrizeContents.js';

class LottoResult {
  static PRIZE_KEYS = PRIZE_KEYS;
  static RANK = { ...INITIAL_RANK };

  #lottos = [];
  #winningNumbers;
  #bonusNumber;
  #totalCost;

  constructor(winningNumbers, bonusNumber, ticketCount, lotto) {
    this.#winningNumbers = winningNumbers;
    this.#bonusNumber = bonusNumber;
    this.#lottos = lotto;
    this.#totalCost = ticketCount * LOTTO_PRICE;
    this.calculateResults();
  }

  // RANK 초기화 메서드
  resetRank() {
    Object.keys(LottoResult.RANK).forEach((key) => (LottoResult.RANK[key] = 0));
  }

  // 당첨 결과 계산
  calculateResults() {
    // RANK를 초기화하여 중복 카운팅을 방지
    this.resetRank();
    this.#lottos.forEach((lotto) => {
      const { matchCount, bonusMatch } = LottoComparer.compare(
        lotto,
        this.#winningNumbers,
        this.#bonusNumber,
      );
      const key = `${matchCount}-${bonusMatch}`;
      const prizeCategory = LottoResult.PRIZE_KEYS[key];

      if (prizeCategory) {
        LottoResult.RANK[prizeCategory] += 1;
      }
    });

    return LottoResult.RANK;
  }

  // 수익률 계산
  calculateProfitRate() {
    const totalPrize = Object.keys(LottoResult.RANK).reduce((total, rank) => {
      const prize = PRIZE[rank] * LottoResult.RANK[rank];
      return total + prize;
    }, 0);

    return ((totalPrize / this.#totalCost) * 100).toFixed(1);
  }
}

export default LottoResult;
