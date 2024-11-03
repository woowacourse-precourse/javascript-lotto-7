import ERROR_MESSAGES from '../utills/errors.js';
import Lotto from './Lotto.js';

class LottoChecker {
  static PRIZE_TIERS = [
    { tier: 0, matchCount: 6, bonus: false, prize: 2000000000 },
    { tier: 1, matchCount: 5, bonus: true, prize: 30000000 },
    { tier: 2, matchCount: 5, bonus: false, prize: 1500000 },
    { tier: 3, matchCount: 4, bonus: false, prize: 50000 },
    { tier: 4, matchCount: 3, bonus: false, prize: 5000 },
  ];

  static checkWinningLottos(lottos, winningNumbers, bonusNumber) {
    this.#validate(lottos);

    const lottoCheckResults = new Array(5).fill(0);
    this.#calculateResults(lottos, lottoCheckResults, winningNumbers, bonusNumber);

    return lottoCheckResults;
  }

  // 검증 메서드
  static #validate(lottos) {
    this.#validateLottosNotEmpty(lottos);
    this.#validateLottosInstanceOf(lottos);
  }

  static #validateLottosNotEmpty(lottos) {
    if (lottos.length <= 0) {
      throw new Error(ERROR_MESSAGES.LOTTOS.EMPTY_ARRAY);
    }
  }

  static #validateLottosInstanceOf(lottos) {
    if (!lottos.every((lotto) => lotto instanceof Lotto)) {
      throw new Error(ERROR_MESSAGES.LOTTOS.INVALID_INSTANCE);
    }
  }

  // 결과 계산 메서드
  static #calculateResults(lottos, lottoCheckResults, winningNumbers, bonusNumber) {
    for (const lotto of lottos) {
      const tier = this.#checkSingleLotto(lotto, winningNumbers.getNumbers(), bonusNumber);
      this.#countCheckResults(lottoCheckResults, tier);
    }
  }

  static #checkSingleLotto(lotto, winningNumbers, bonusNumber) {
    const numbers = lotto.getNumbers();
    const matchCount = numbers.filter((num) => winningNumbers.includes(num)).length;
    const hasBonus = numbers.includes(bonusNumber);

    return this.#findTier(matchCount, hasBonus);
  }

  static #countCheckResults(lottoCheckResults, tier) {
    if (tier !== undefined) {
      lottoCheckResults[tier]++;
    }
  }

  // 티어 검색 메서드
  static #findTier(matchCount, hasBonus) {
    const tier = LottoChecker.PRIZE_TIERS.find(
      (e) => e.matchCount === matchCount && (!e.bonus || hasBonus)
    );
    return tier ? tier.tier : undefined;
  }
}

export default LottoChecker;
