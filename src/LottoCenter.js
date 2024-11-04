import LOTTO_RULE from './constant/lotto.js';

class LottoCenter {
  #winningNumbers;
  #bonusNumber;

  setWinningNumbers(winningNumbers, bonusNumber) {
    this.#winningNumbers = winningNumbers.split(',').map(Number);
    this.#bonusNumber = Number(bonusNumber);
  }

  getWinningRanks(lottos) {
    return lottos.map((lotto) => this.#getEachLottoWinningRank(lotto));
  }

  #getEachLottoWinningRank(lotto) {
    const matchCount = lotto.filter((number) =>
      this.#winningNumbers.includes(number),
    ).length;
    const isBonusMatch = lotto.includes(this.#bonusNumber);

    return this.#calculateWinningRank(matchCount, isBonusMatch);
  }

  #calculateWinningRank(matchCount, isBonusMatch) {
    switch (matchCount) {
      case LOTTO_RULE.MATCH_COUNT.FIRST:
        return LOTTO_RULE.RANK.FIRST;
      case LOTTO_RULE.MATCH_COUNT.SECOND_OR_THIRD:
        return this.#checkSecond(isBonusMatch);
      case LOTTO_RULE.MATCH_COUNT.FOURTH:
        return LOTTO_RULE.RANK.FOURTH;
      case LOTTO_RULE.MATCH_COUNT.FIFTH:
        return LOTTO_RULE.RANK.FIFTH;
      default:
        return LOTTO_RULE.RANK.NONE;
    }
  }

  #checkSecond(isBonusMatch) {
    if (isBonusMatch) {
      return LOTTO_RULE.RANK.SECOND;
    }
    return LOTTO_RULE.RANK.THIRD;
  }
}

export default LottoCenter;
