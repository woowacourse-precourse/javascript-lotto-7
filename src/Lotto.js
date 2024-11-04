import ValidateNumbers from "../src/utils/ValidateNumbers.js";

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
    const num = Number(bonusNum);
    if (isNaN(num)) {
      throw new Error("[ERROR] 보너스 번호는 숫자이어야 합니다.");
    }

    if (num < 1 || num > 45) {
      throw new Error("[ERROR] 보너스 번호는 1~45 사이의 숫자여야 합니다.");
    }

    if (!Number.isInteger(num)) {
      throw new Error("[ERROR] 보너스 번호는 1~45 사이의 정수여야 합니다.");
    }

    if (this.#numbers.includes(num.toString())) {
      throw new Error("[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.");
    }
  }
}

export default Lotto;
