class Validator {
  static inputValidate(input) {
    this.#isEmpty(input);
    this.#isNumber(input);
  
    return Number(input);
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
  
}

export default Validator;