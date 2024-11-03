import { DECIMAL_PLACES, LOTTO_PRICE_UNIT, LOTTO_PRIZES, LOTTO_STATISTICS_KEYS, PERCENT_MULTIPLIER } from '../constants/lottoConstant.js';

class LottoStatistics {
  #statistics;

  #lottoPrize;

  #profitRate;

  constructor() {
    this.#statistics = new Map([
      [LOTTO_STATISTICS_KEYS.THREE, 0],
      [LOTTO_STATISTICS_KEYS.FOUR, 0],
      [LOTTO_STATISTICS_KEYS.FIVE, 0],
      [LOTTO_STATISTICS_KEYS.FIVE_AND_BONUS, 0],
      [LOTTO_STATISTICS_KEYS.SIX, 0],
    ]);

    this.#lottoPrize = 0;
    this.#profitRate = 0;
  }

  computeLottoResults(lottos, lottoWinningNumbers) {
    for (let i = 0; i < lottos.length; i += 1) {
      const lotto = lottos[i].getNumbers();
      const matched = lotto.filter(number => lottoWinningNumbers.getWinningNumbers().includes(number));
      const isBonusMatch = lotto.filter(number => lottoWinningNumbers.getBonusNumber() === number).length === 1;

      const statisticsKey = this.getWinningStatisticKey(matched.length, isBonusMatch);

      this.setStatistics(statisticsKey);
    }

    this.computLottoPrize();
  }

  getWinningStatisticKey(matchedCount, isBonusNumberMatch) {
    const statisticKeyMap = {
      3: LOTTO_STATISTICS_KEYS.THREE,
      4: LOTTO_STATISTICS_KEYS.FOUR,
      5: LOTTO_STATISTICS_KEYS.FIVE,
      6: LOTTO_STATISTICS_KEYS.SIX,
    };

    if (!statisticKeyMap[matchedCount]) return null;
    if (matchedCount === 5 && isBonusNumberMatch) return LOTTO_STATISTICS_KEYS.FIVE_AND_BONUS;

    return statisticKeyMap[matchedCount];
  }

  computLottoPrize() {
    this.#statistics.forEach((_, key) => {
      const currCalculatedLottoPrize = this.calculateLottoPrize(key);
      this.#lottoPrize += currCalculatedLottoPrize;
    });
  }

  calculateLottoPrize(key) {
    const prizeKeyMap = {
      [LOTTO_STATISTICS_KEYS.THREE]: LOTTO_PRIZES.THREE,
      [LOTTO_STATISTICS_KEYS.FOUR]: LOTTO_PRIZES.FOUR,
      [LOTTO_STATISTICS_KEYS.FIVE]: LOTTO_PRIZES.FIVE,
      [LOTTO_STATISTICS_KEYS.FIVE_AND_BONUS]: LOTTO_PRIZES.FIVE_AND_BONUS,
      [LOTTO_STATISTICS_KEYS.SIX]: LOTTO_PRIZES.SIX,
    };

    const prize = prizeKeyMap[key];

    if (!prize) return 0;

    return this.#statistics.get(key) * prize;
  }

  statisticsToString() {
    let str = '';

    this.#statistics.forEach((_, key) => {
      str += this.convertToString(key);
    });

    return str;
  }

  convertToString(key) {
    const count = this.#statistics.get(key);

    if (key === 'matchedThree') return `3개 일치 (5,000원) - ${count}개\n`;
    if (key === 'matchedFour') return `4개 일치 (50,000원) - ${count}개\n`;
    if (key === 'matchedFiveAndBonus') return `5개 일치, 보너스 볼 일치 (30,000,000원) - ${count}개\n`;
    if (key === 'matchedFive') return `5개 일치 (1,500,000원) - ${count}개\n`;
    if (key === 'matchedSix') return `6개 일치 (2,000,000,000원) - ${count}개`;

    return '';
  }

  computeProfitRate(lottos) {
    const purchasePrice = lottos.length * LOTTO_PRICE_UNIT;
    const profitRate = ((this.#lottoPrize / purchasePrice) * PERCENT_MULTIPLIER).toFixed(DECIMAL_PLACES);

    this.setProfitRate(profitRate);
  }

  setStatistics(key) {
    if (!key) return;

    this.#statistics.set(key, this.#statistics.get(key) + 1);
  }

  getStatistics() {
    return this.#statistics;
  }

  getProfitRate() {
    return this.#profitRate;
  }

  setProfitRate(profitRate) {
    this.#profitRate = profitRate;
  }
}

export default LottoStatistics;
