class WinningResult {
  #matchNumberCount;

  #count;

  #prize

  #hasBonusNumberMatched;

  #bonusNumberMatchedCount;

  #bonusNumberMatchedPrize;

  constructor(matchNumberCount, prize, hasBonusNumberMatched, bonusNumberMatchedPrize) {
    this.#matchNumberCount = matchNumberCount;
    this.#prize = prize;
    this.#count = 0;

    this.#hasBonusNumberMatched = hasBonusNumberMatched;
    this.#bonusNumberMatchedPrize = bonusNumberMatchedPrize;
    this.#bonusNumberMatchedCount = 0;
  }

  get matchNumberCount() {
    return Number(this.#matchNumberCount);
  }

  get count() {
    return this.#count;
  }

  get prize() {
    return this.#prize;
  }

  get hasBonusNumberMatched() {
    return this.#hasBonusNumberMatched;
  }

  get bonusNumberMatchedPrize() {
    return this.#bonusNumberMatchedPrize;
  }

  get bonusNumberMatchedCount() {
    return this.#bonusNumberMatchedCount;
  }

  incrementCount() {
    this.#count += 1;
  }

  incrementBonusMatchedCount() {
    this.#bonusNumberMatchedCount += 1;
  }

  getTotalPrize() {
    let totalPrize = this.#convertPrizeValueToNumber(this.#prize) * this.#count;

    if (this.#hasBonusNumberMatched) {
      totalPrize += this.#convertPrizeValueToNumber(this.#bonusNumberMatchedPrize) * this.#bonusNumberMatchedCount;
    }

    return totalPrize;
  }

  #convertPrizeValueToNumber(prize) {
    return Number(prize.replaceAll(',', ''));
  }
}

export default WinningResult;