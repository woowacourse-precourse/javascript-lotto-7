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
    return Number(this.#prize.replaceAll(',', '')) * this.#count;
  }

  getTotalBonusNumberMatchedPrize() {
    return Number(this.#bonusNumberMatchedPrize.replaceAll(',', '')) * this.#bonusNumberMatchedCount;
  }
}

export default WinningResult;