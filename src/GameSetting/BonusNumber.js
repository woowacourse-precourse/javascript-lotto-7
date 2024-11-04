import Validation from "./Utils/Validation.js";

class BonusNumber {
  #number;

  constructor(input) {
    this.#number = this.#validate(input);
  }

  #validate(input) {
    // 숫자 인지 검사
    let validatedNumber = Validation.inputNaturalNumber(input);

    // 1-45인지 검사
    Validation.numberRange(validatedNumber);

    return validatedNumber;
  }

  getBonusNumber() {
    return this.#number;
  }
}

export default BonusNumber;
