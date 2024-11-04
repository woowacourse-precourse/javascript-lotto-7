import { Errors } from "./constants.js";

class Bonus {
  #bonusNumber;

  constructor(number, winningNumbers) {
    this.#validate(number, winningNumbers);
    this.#bonusNumber = number;
  }

  #validate(numbers, winningNumbers) {
    if (!Number.isInteger(numbers))
      throw new Error(Errors.bonusNumber.NOT_INTEGER_NUMBER);

    if (winningNumbers.includes(numbers))
      throw new Error(Errors.bonusNumber.NOT_UNIQUE_NUMBER);
  }

  getBonusNumber() {
    return this.#bonusNumber;
  }
}

export default Bonus;
