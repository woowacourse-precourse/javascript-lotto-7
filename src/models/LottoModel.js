import { validateWinningNumbersPipe } from "../validation/validateWinningNumbers/validateWinningNumbersPipe.js";

class LottoModel {
  #winningNumbers;

  constructor(winningNumbers) {
    this.#validate(winningNumbers);
    this.#winningNumbers = winningNumbers;
  }

  #validate(winningNumbers) {
    validateWinningNumbersPipe(winningNumbers);
  }

  getWinningNumbers() {
    return this.#winningNumbers;
  }
}

export default LottoModel;
