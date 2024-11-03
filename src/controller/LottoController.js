import { WINNING_PRIZES } from '../constants/Constants.js';
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
    const totalEarnings =
      WINNING_PRIZES.MATCH_3.PRIZE * statistics[3] +
      WINNING_PRIZES.MATCH_4.PRIZE * statistics[4] +
      WINNING_PRIZES.MATCH_5.PRIZE * statistics[5] +
      WINNING_PRIZES.MATCH_5_BONUS.PRIZE * statistics['5+'] +
      WINNING_PRIZES.MATCH_6.PRIZE * statistics[6];

    const earningRate = totalEarnings / this.lottoModel.getBuyLottoCount() / 10;
    return earningRate;
  }
}

export default LottoController;
