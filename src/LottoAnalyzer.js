import Validate from './Validate.js';
import lottoConstants from './constants/lottoConstants.js';
import outputMessages from './constants/outputMessages.js';
import { EMPTY_STRING } from './constants/strings.js';
class LottoAnalyzer {
  #winningLottoSet;
  #bonusNum;
  #buyLottos;
  #investMoney;
  #winningCount = Array(lottoConstants.PRIZE_LENGHT).fill(0);
  #prizeMoney = lottoConstants.PRIZE;
  #totalProfit = 0;
  #roi = 0;
  #loseIndex = -1;
  #statistics = outputMessages.STATS_PREFIX;
  #ROUND_DECIMALS = 2;

  constructor(winningLotto, buyLottos, bonusNum, invest) {
    Validate.validateBonusNum(bonusNum, winningLotto);
    this.#winningLottoSet = new Set(winningLotto);
    this.#buyLottos = buyLottos;
    this.#bonusNum = bonusNum;
    this.#investMoney = invest;
  }

  run() {
    this.#countWinningLotto();
    this.#calculateTotalProfit();
    this.#calculateRoi();
    this.#makeStatistics();
  }

  getStatistics() {
    return this.#statistics;
  }

  #makeStatistics() {
    for (let idx = 0; idx < lottoConstants.PRIZE_LENGHT; idx++) {
      this.#statistics += this.#makeMatchInfo(idx);
    }
    this.#statistics += outputMessages.ROI_MESSAGE(this.#roi);
  }

  #makeMatchInfo(prize) {
    let matchCount = prize + 3;
    let bonusCaseMessage = EMPTY_STRING;
    if (prize === lottoConstants.FIRST_PRIZE) matchCount -= 1;
    else if (prize === lottoConstants.SECOND_PRIZE) {
      matchCount -= 1;
      bonusCaseMessage = outputMessages.BONUS_MESSAGE;
    }
    return outputMessages.MATCH_COUNT_MESSAGE(
      matchCount,
      bonusCaseMessage,
      this.#prizeMoney[prize].toLocaleString(),
      this.#winningCount[prize]
    );
  }

  #countWinningLotto() {
    this.#buyLottos.forEach((lotto) => {
      let matchBonusCount = 0;
      let matchBasicCount = 0;
      lotto.getNumbers().forEach((number) => {
        if (number === this.#bonusNum) matchBonusCount += 1;
        if (this.#winningLottoSet.has(number)) matchBasicCount += 1;
      });
      const index = this.#getIndex(matchBonusCount, matchBasicCount);
      if (index >= 0) this.#winningCount[index] += 1;
    });
  }

  #calculateTotalProfit() {
    for (let idx = 0; idx < lottoConstants.PRIZE_LENGHT; idx++) {
      this.#totalProfit += this.#winningCount[idx] * this.#prizeMoney[idx];
    }
  }

  #calculateRoi() {
    const rateOfReturn = (this.#totalProfit / this.#investMoney) * 100;
    this.#roi = Number(rateOfReturn.toFixed(this.#ROUND_DECIMALS));
  }

  #getIndex(matchBonusCount, matchBasicCount) {
    if (matchBasicCount === 6) return lottoConstants.FIRST_PRIZE;
    if (matchBasicCount === 5 && matchBonusCount === 1) return lottoConstants.SECOND_PRIZE;
    if (matchBasicCount === 5) return lottoConstants.THIRD_PRIZE;
    if (matchBasicCount === 4) return lottoConstants.FOURTH_PRIZE;
    if (matchBasicCount === 3) return lottoConstants.FIFTH_PRIZE;
    return this.#loseIndex;
  }
}

export default LottoAnalyzer;
