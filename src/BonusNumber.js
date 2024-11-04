import ErrorCollection from "./ErrorCollection.js";

class BonusNumber {
  #bonus;

  constructor(number, winningNumbers) {
    this.#validate(number, winningNumbers);
    this.#bonus = number;
  }

  #validate(number, winningNumbers) {
    const errorCollection = new ErrorCollection();
    errorCollection.checkBonusNumberInteger(number);
    errorCollection.checkBonusNumberRange(number);
    errorCollection.checkBonusNumberDuplicate(number, winningNumbers);
  }

  getBonusNumber() {
    return this.#bonus;
  }
}

export default BonusNumber;
