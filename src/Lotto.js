import ValidateNumbers from "../src/utils/ValidateNumbers.js";
import ValidateBonusNumber from "./utils/ValidateBonusNumber.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    const validateNumbers = new ValidateNumbers(numbers);
    validateNumbers.isNumLengthSix();
    validateNumbers.isNumValid();
    validateNumbers.isUniqueNumber();
  }

  validateBonusNumber(bonusNum) {
    const validateBonusNumber = new ValidateBonusNumber(
      bonusNum,
      this.#numbers
    );
    validateBonusNumber.validate();
  }
}

export default Lotto;
