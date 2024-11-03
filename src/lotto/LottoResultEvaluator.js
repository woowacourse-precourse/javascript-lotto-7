import WinningItem from './model/WinningItem.js';

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

  #incrementCountWithBonusNumberCheck(winningItem, lotto, bonusNumber) {
    if (winningItem.hasBonusNumberMatched && lotto.isExistNumberInNumbers(bonusNumber)) {
      winningItem.incrementBonusMatchedCount();
      return;
    }

    winningItem.incrementCount();
  }

  #initResult() {
    const result = {};
    this.#winingRules.forEach(rule => {
      const winningItem = this.#getWinningItem(rule);
      result[winningItem.matchNumberCount] = winningItem;
    });

    return result;
  }

  #getWinningItem(rule) {
    return new WinningItem(rule.MATCH_COUNT, rule.PRIZE, rule.HAS_BONUS_NUMBER_MATCHED, rule.BONUS_NUMBER_MATCHED_PRIZE);
  }

  #getMatchNumberCount(lotto, winningNumbers) {
    return lotto.numbers.filter((number) => winningNumbers.includes(number)).length;
  }
}

export default LottoResultEvaluator;