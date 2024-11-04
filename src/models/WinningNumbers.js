import Validator from "../utils/Validator.js";

class WinningNumbers {
  #numbers;
  #bonusNumber;

  constructor(numbers, bonusNumber) {
    this.#validate(numbers, bonusNumber);
    this.#numbers = numbers;
    this.#bonusNumber = bonusNumber;
  }

  #validate(numbers, bonusNumber) {
    Validator.validateLottoNumbers(numbers);
    Validator.validateBonusNumber(bonusNumber, numbers);
  }

  getNumbers() {
    return this.#numbers;
  }

  getBonusNumber() {
    return this.#bonusNumber;
  }
}

export default WinningNumbers;
