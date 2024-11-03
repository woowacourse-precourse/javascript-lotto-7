export default class {
  #winningNumbers;
  #bonusNumber;

  constructor(winningNumbers, bonusNumber) {
    this.#winningNumbers = winningNumbers;
    this.#bonusNumber = bonusNumber;
  }

  calculatePrizes(lottoList) {
    lottoList.forEach((lotto) => {
      const matchedCount = this.matchingWinningNumbers(lotto);
      const hasBonusNumber = this.matchingBonusNumbers(lotto);
      saveGameResults(matchedCount, hasBonusNumber);
    });
  }

  matchingWinningNumbers(lotto) {
    const lottoNumberSet = new Set(lotto.getNumbers());
    const winningNumberSet = new Set(this.#winningNumbers);
    const unionNumberSet = new Set([...lottoNumberSet], [...winningNumberSet]);
    const matchedCount =
      lottoNumberSet.size + winningNumberSet.size - unionNumberSet.size;

    return matchedCount;
  }

  matchingBonusNumbers(lotto) {
    const lottoNumberSet = new Set(lotto.getNumbers());
    const bonusNumberSet = new Set(this.#bonusNumber);
    const unionNumberSet = new Set([...lottoNumberSet], [...bonusNumberSet]);
    const matchedCount =
      lottoNumberSet.size + bonusNumberSet.size - unionNumberSet.size;

    if (matchedCount == bonusNumberSet.size) return true;
    return false;
  }
}
