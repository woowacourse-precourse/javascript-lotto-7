import Lotto from "./Lotto.js";

class WinningLotto extends Lotto {
  #bonusNumber;

  constructor(numbers, bonusNumber) {
    super(numbers);
    this.#bonusNumber = bonusNumber;
  }

  getNumbers() {
    return super.getNumbers();
  }

  getBonusNumber() {
    return this.#bonusNumber;
  }
}

export default WinningLotto;
