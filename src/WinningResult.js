class WinningResult {
  #matchText;
  #prize;
  #count = 0;

  constructor(matchText, prize) {
    this.#matchText = matchText;
    this.#prize = prize;
  }

  incrementCount() {
    this.#count += 1;
  }

  get matchText() {
    return this.#matchText;
  }

  get prize() {
    return this.#prize;
  }

  get count() {
    return this.#count;
  }

  get totalPrize() {
    return this.#count * this.#prize;
  }
}

export default WinningResult;
