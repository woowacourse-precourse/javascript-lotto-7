import PrizeResults from './PrizeResults.js';

export default class {
  #winningNumbers;

  #bonusNumber;

  constructor(winningNumbers, bonusNumber) {
    this.#winningNumbers = winningNumbers;
    this.#bonusNumber = bonusNumber;
  }

  calculatePrizes(lottoList) {
    const prizeResults = new PrizeResults();
    lottoList.forEach((lotto) => {
      const matchedCount = this.countWinningNumbers(lotto);
      const hasBonusNumber = this.hasMatchedBonusNumbers(lotto);
      prizeResults.save(matchedCount, hasBonusNumber);
    });
    return prizeResults.get();
  }

  countWinningNumbers(lotto) {
    const matchedCount = this.countSameNumber(lotto, this.#winningNumbers);

    return matchedCount;
  }

  hasMatchedBonusNumbers(lotto) {
    const matchedCount = this.countSameNumber(lotto, this.#bonusNumber);

    if (matchedCount === this.#bonusNumber.length) return true;
    return false;
  }

  countSameNumber(lotto, targetNumbers) {
    const lottoNumberSet = new Set(lotto.getNumbers());
    const targetNumberSet = new Set(targetNumbers);
    const unionNumberSet = new Set([...lottoNumberSet, ...targetNumberSet]);

    return lottoNumberSet.size + targetNumberSet.size - unionNumberSet.size;
  }
}
