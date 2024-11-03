class LottoStatistics {
  #statistics;

  #lottoPrize;

  constructor() {
    this.#statistics = new Map([
      ['matchedThree', 0],
      ['matchedFour', 0],
      ['matchedFive', 0],
      ['matchedFiveAndBonus', 0],
      ['matchedSix', 0],
    ]);

    this.#lottoPrize = 0;
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
    if (matchedCount === 3) return 'matchedThree';
    if (matchedCount === 4) return 'matchedFour';
    if (matchedCount === 5 && isBonusNumberMatch) return 'matchedFiveAndBonus';
    if (matchedCount === 5) return 'matchedFive';
    if (matchedCount === 6) return 'matchedSix';

    return null;
  }

  setStatistics(key) {
    if (!key) return;

    this.#statistics.set(key, this.#statistics.get(key) + 1);
  }

  getStatistics() {
    return this.#statistics;
  }

  computLottoPrize() {
    this.#statistics.forEach((_, key) => {
      const currCalculatedLottoPrize = this.calculateLottoPrize(key);
      this.#lottoPrize += currCalculatedLottoPrize;
    });
  }

  calculateLottoPrize(key) {
    if (key === 'matchedThree') return this.#statistics.get(key) * 5000;
    if (key === 'matchedFour') return this.#statistics.get(key) * 50000;
    if (key === 'matchedFiveAndBonus') return this.#statistics.get(key) * 30000000;
    if (key === 'matchedFive') return this.#statistics.get(key) * 1500000;
    if (key === 'matchedSix') return this.#statistics.get(key) * 2000000000;

    return 0;
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
    if (key === 'matchedSix') return `6개 일치 (2,000,000,000원) - ${count}개\n`;

    return '';
  }
}

export default LottoStatistics;
