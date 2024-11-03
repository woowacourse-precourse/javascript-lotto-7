export default class {
  #winningNumbers;

  #bonusNumber;

  constructor(winningNumbers, bonusNumber) {
    this.#winningNumbers = winningNumbers;
    this.#bonusNumber = bonusNumber;
  }

  calculatePrizes(lottoList) {
    lottoList.forEach((lotto) => {
      const matchedCount = this.countWinningNumbers(lotto);
      const hasBonusNumber = this.hasMatchedBonusNumbers(lotto);
    });
  }

  countWinningNumbers(lotto) {
    const matchedCount = this.count(lotto.getNumbers, this.#winningNumbers);

    return matchedCount;
  }

  hasMatchedBonusNumbers(lotto) {
    const matchedCount = this.count(lotto.getNumbers(), this.#bonusNumber);

    if (matchedCount === this.#bonusNumber.length()) return true;
    return false;
  }

  count(lotto, targetNumbers) {
    const lottoNumberSet = new Set(lotto.getNumbers());
    const targetNumberSet = new Set(targetNumbers);
    const unionNumberSet = new Set([...lottoNumberSet, ...targetNumberSet]);

    return lottoNumberSet.size + targetNumberSet.size - unionNumberSet.size;
  }
}
