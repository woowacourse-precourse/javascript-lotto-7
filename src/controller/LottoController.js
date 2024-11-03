import OutputView from './../views/OutputView.js';

class LottoController {
  constructor(lottoModel) {
    this.lottoModel = lottoModel;
  }

  compareLottoNumber() {
    const randomLottoNumbers = this.lottoModel.getRandomLottoNumbers();
    const pickBonusNumber = this.lottoModel.getPickBonusNumber();
    const pickLottoNumber = this.lottoModel.getPickLottoNumber();
    const lottoNumberMatchCount = this.calculateMatches(randomLottoNumbers, pickLottoNumber, pickBonusNumber);
    const bonusNumberMatchCount = this.calculateBonusMatches(randomLottoNumbers, pickBonusNumber);

    return { lottoNumberMatchCount, bonusNumberMatchCount };
  }

  calculateMatches(randomLottoNumbers, pickLottoNumber, pickBonusNumber) {
    return randomLottoNumbers.map((lotto) => {
      const lottoNumber = lotto.getNumbers();
      return lottoNumber.filter((number) => pickLottoNumber.includes(number)).length;
    });
  }

  calculateBonusMatches(randomLottoNumbers, pickBonusNumber) {
    return randomLottoNumbers.map((lotto) => {
      const lottoNumber = lotto.getNumbers();
      return lottoNumber.includes(pickBonusNumber) ? 1 : 0;
    });
  }

  calculateStatistics() {
    const { lottoNumberMatchCount, bonusNumberMatchCount } = this.compareLottoNumber();
    const statistics = { 3: 0, 4: 0, 5: 0, '5+': 0, 6: 0 };
    lottoNumberMatchCount.forEach((matchCount, idx) => {
      if (matchCount === 6) {
        statistics[6]++;
      } else if (matchCount === 5 && bonusNumberMatchCount[idx] === 1) {
        statistics['5+']++;
      } else if (matchCount >= 3) {
        statistics[matchCount]++;
      }
    });
    return statistics;
  }

  calculateEarningRate(statistics) {
    const earningRate =
      (5000 * statistics[3] +
        50000 * statistics[4] +
        1500000 * statistics[5] +
        30000000 * statistics['5+'] +
        2000000000 * statistics[6]) /
      this.lottoModel.getBuyLottoCount() /
      10;
    return earningRate;
  }
}

export default LottoController;
