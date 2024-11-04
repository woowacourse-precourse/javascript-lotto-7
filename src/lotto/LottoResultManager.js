import WinningResult from './model/WinningResult.js';

class LottoResultManager {

  #winningResults;

  constructor(winningRules) {
    this.#winningResults = this.#initResult(winningRules);
  }

  generateWinningResult(lottos, winningNumbers, bonusNumber) {
    const keys = Object.keys(this.#winningResults).map(Number);
    lottos.forEach(lotto => {
      const count = this.#getMatchNumberCount(lotto, winningNumbers);
      if (keys.includes(count)) {
        this.#incrementCountWithBonusNumberCheck(this.#winningResults[count], lotto, bonusNumber);
      }
    });

    return Object.values(this.#winningResults);
  }

  getTotalPrize() {
    return Object.values(this.#winningResults).reduce((totalPrize, winningResult) => totalPrize + winningResult.getTotalPrize(), 0);
  }

  #incrementCountWithBonusNumberCheck(winningResult, lotto, bonusNumber) {
    if (winningResult.hasBonusNumberMatched && lotto.isExistNumberInNumbers(bonusNumber)) {
      winningResult.incrementBonusMatchedCount();
      return;
    }

    winningResult.incrementCount();
  }

  #initResult(winningRules) {
    const result = {};

    winningRules.forEach(rule => {
      const winningResult = this.#getWinningResult(rule);
      result[winningResult.matchNumberCount] = winningResult;
    });

    return result;
  }

  #getWinningResult(rule) {
    return new WinningResult(rule.MATCH_COUNT, rule.PRIZE, rule.HAS_BONUS_NUMBER_MATCHED, rule.BONUS_NUMBER_MATCHED_PRIZE);
  }

  #getMatchNumberCount(lotto, winningNumbers) {
    return winningNumbers.filter((number) => lotto.isExistNumberInNumbers(number)).length;
  }
}

export default LottoResultManager;