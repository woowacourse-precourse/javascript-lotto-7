import Rank from './Rank.js';
import { INITIAL_COUNT, RANK_INFO } from './constants.js';

class RankSystem {
  #result;
  #winningNumbers;
  #bonusNumber;

  constructor(lottos, winningNumbers, bonusNumber) {
    this.#result = [];
    this.#winningNumbers = winningNumbers;
    this.#bonusNumber = bonusNumber;
    this.#setRanks();
    this.setResult(lottos);
  }

  #setRanks() {
    for (let i = INITIAL_COUNT; i < RANK_INFO.length; i += 1) {
      const currentInfo = RANK_INFO[i];
      this.#result.push(new Rank(currentInfo.rank, currentInfo.winnings, currentInfo.matchedCount));
    }
  }

  findMatchedNumbers(lottoNumbers) {
    return lottoNumbers.filter((number) => this.#winningNumbers.includes(number));
  }

  getMatchedNumbersCount(lottoNumbers) {
    return this.findMatchedNumbers(lottoNumbers, this.#winningNumbers).length;
  }

  hasBonusNumber(lottoNumbers) {
    return lottoNumbers.includes(this.#bonusNumber);
  }

  setResult(lottos) {
    lottos.forEach((lotto) => {
      const key = this.getRank(lotto.numbers);
      if (!key) return;
      this.#result[key - 1].increaseCount();
    });
  }

  getRank(lottoNumbers) {
    switch (this.getMatchedNumbersCount(lottoNumbers)) {
      case RANK_INFO[0].matchedCount:
        return RANK_INFO[0].rank;
      case RANK_INFO[1].matchedCount:
        if (!this.hasBonusNumber(lottoNumbers)) return;
        return RANK_INFO[1].rank;
      case RANK_INFO[2].matchedCount:
        return RANK_INFO[2].rank;
      case RANK_INFO[3].matchedCount:
        return RANK_INFO[3].rank;
      case RANK_INFO[4].matchedCount:
        return RANK_INFO[4].rank;
      default:
        return;
    }
  }

  get result() {
    return this.#result;
  }

  calculateTotalWinnings() {
    let totalWinnings = 0;
    this.#result.forEach((rank) => (totalWinnings += rank.winnings * rank.winningCount));
    return totalWinnings;
  }
}

export default RankSystem;
