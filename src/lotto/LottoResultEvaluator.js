import WinningResult from './model/WinningResult.js';

class LottoResultEvaluator {

  #winingRules;

  constructor(winningRules) {
    this.#winingRules = winningRules;
  }

  generateWinningResult(lottos, winningNumbers, bonusNumber) {
    const result = this.#initResult();
    const resultKeys = Object.keys(result).map(Number);
    lottos.forEach(lotto => {
      const count = this.#getMatchNumberCount(lotto, winningNumbers);
      if (resultKeys.includes(count)) {
        this.#incrementCountWithBonusNumberCheck(result[count], lotto, bonusNumber);
      }
    });

    return Object.values(result);
  }

  #incrementCountWithBonusNumberCheck(winningResult, lotto, bonusNumber) {
    if (winningResult.hasBonusNumberMatched && lotto.isExistNumberInNumbers(bonusNumber)) {
      winningResult.incrementBonusMatchedCount();
      return;
    }

    winningResult.incrementCount();
  }

  #initResult() {
    const result = {};
    this.#winingRules.forEach(rule => {
      const winningResult = this.#getWinningResult(rule);
      result[winningResult.matchNumberCount] = winningResult;
    });

    return result;
  }

  #getWinningResult(rule) {
    return new WinningResult(rule.MATCH_COUNT, rule.PRIZE, rule.HAS_BONUS_NUMBER_MATCHED, rule.BONUS_NUMBER_MATCHED_PRIZE);
  }

  #getMatchNumberCount(lotto, winningNumbers) {
    return lotto.numbers.filter((number) => winningNumbers.includes(number)).length;
  }
}

export default LottoResultEvaluator;