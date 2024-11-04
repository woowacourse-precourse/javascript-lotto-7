import Lotto from "../Lotto.js";

class Validator {
  static inputValidate(input) {
    this.#isEmpty(input);
    this.#isNumber(input);
  
    return Number(input);
  }

  static budgetValidate(input) {
    input = this.inputValidate(input);
    this.#isZero(input);
    this.#isNegative(input);
    this.#properUnit(input);

    return input;
  }

  static winningValidate(input) {
    input = this.#splitNumbers(input);
    input = this.#eachValidate(input);
    this.#numbersValidate(input);

    return input;
  }

  static #isEmpty(input) {
    if (!input) {
      const ERROR_MESSAGE = `[ERROR] 값을 입력해야 합니다.(Empty Input)`;
      throw new Error(ERROR_MESSAGE);
    }
  }
  
  static #isNumber(input) {
    if (isNaN(input)) {
      const ERROR_MESSAGE = `[ERROR] 숫자를 입력해야 합니다.(Not Number: ${input})`;
      throw new Error(ERROR_MESSAGE);
    }
  }

  static #isZero(input) {
    if (input == 0) {
      const ERROR_MESSAGE = `[ERROR] 구매 금액은 0이 아니어야 합니다.(Zero Budget: ${input})`;
      throw new Error(ERROR_MESSAGE);
    }
  }
  
  static #isNegative(input) {
    if (input < 0) {
      const ERROR_MESSAGE = `[ERROR] 구매 금액은 양수여야 합니다.(Negative Budget: ${input})`;
      throw new Error(ERROR_MESSAGE);
    }  
  }
  
  static #properUnit(input) {
    if (!this.#isMultipleOfThousand(input)) {
      const ERROR_MESSAGE = `[ERROR] 구매 금액은 1000원 단위여야 합니다.(Not Multiple of 1000: ${input})`;
      throw new Error(ERROR_MESSAGE);
    }
  }

  static #isMultipleOfThousand(amount) {
    const THOUSAND = 1000;
    return amount % THOUSAND === 0;
  }

  static #splitNumbers(numbers) {
    const DELIMITER = ","
    return numbers.split(DELIMITER);
  }

  static #eachValidate(array) {
    array.forEach((element, idx) => {
      array[idx] = this.inputValidate(element);
    });
  
    return array;
  }
  
  static #numbersValidate(array) {
    const WINNING_LOTTO = new Lotto(array);
  }
  
}

export default Validator;